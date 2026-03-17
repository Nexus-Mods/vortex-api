# Vortex API

Type definitions for the [Vortex](https://www.nexusmods.com/about/vortex/) extension API.

This package provides auto-generated typings that extensions can use to interact with Vortex - the mod manager by Nexus Mods.

## Documentation

For packaging and distributing extensions, see [Packaging extensions for Vortex](https://wiki.nexusmods.com/index.php/Packaging_extensions_for_Vortex).

For API changes between versions, see the [Changelog](CHANGELOG.md).

For a full list of events extensions can listen to or emit, see the [Events Reference](docs/EVENTS.md).

## Installation

```
npm install vortex-api
```

`vortex-api` declares Vortex runtime packages (React, Redux, Bluebird, etc.) as `peerDependencies`. With pnpm, npm 7+, or Yarn Berry these are installed automatically - you don't need to add them to your own `devDependencies`. For details on migrating from earlier versions, see the [Migration Guide](docs/MIGRATION.md).

## Extension structure

A Vortex extension is a JavaScript module that exports an `init` function. The function receives an `IExtensionContext` object that provides access to the full API.

`info.json`

- `name` - the display name of your extension.
- `author` - the extension author's name.
- `version` - the version of your extension.
- `description` - a short description of what your extension does.

`index.js`

- This is the main entry point of your extension.
- Import Vortex API types using `import { types, util, selectors } from 'vortex-api'`
- Must export a `default` function (or named `init`) that receives `IExtensionContext`.
- Must bundle all external dependencies into the output.

## App architecture

#### Vortex is organized around a few core systems:

- **Extensions** - modular plugins that add game support, UI pages, settings, and more. Extensions interact with Vortex through the `IExtensionContext` interface.
- **State (Redux)** - all application state is managed through a Redux store. Extensions can register reducers and react to state changes.
- **Profiles** - users can create multiple mod profiles per game, each with its own set of enabled mods and configuration.
- **Mod Management** - handles mod installation, deployment (via symlinks or hardlinks), and conflict resolution.

#### Through `IExtensionContext`, extensions can:

- Register game support using `registerGame`.
- Add main pages and dialog pages using `registerMainPage` and `registerDialog`.
- Add mod installers using `registerInstaller` and `registerModType`.
- Add action buttons and toolbar items using `registerAction`.
- Add settings pages using `registerSettings`.
- Access the Redux store via `context.api.getState()` and `context.api.store`.
- Show notifications and dialogs via `context.api.sendNotification` and `context.api.showDialog`.

#### Registering to lifecycle events

Extensions can hook into the application lifecycle:

```ts
function init(context: IExtensionContext) {
  // Called when the extension is loaded.
  // Register your features here.

  context.once(() => {
    // Called after all extensions have been loaded.
    // Safe to interact with other extensions here.
  });
}
```

## Game extensions

The [`extensions/games/`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games) directory in the Vortex repository contains game support extensions that serve as practical examples. They range from simple to complex:

#### Simple game support (~100 lines)

A minimal game extension registers the game and tells Vortex where to find it. Only `id`, `name`, `executable`, `requiredFiles`, and `queryModPath` are required - everything else is optional:

```ts
function init(context: IExtensionContext) {
  context.registerGame({
    id: 'mygame',
    name: 'My Game',
    mergeMods: true,
    logo: 'gameart.jpg',
    executable: () => 'MyGame.exe',
    requiredFiles: ['MyGame.exe'],
    queryModPath: () => 'Mods',
    // Vortex will auto-discover the game across all supported stores
    queryArgs: {
      steam: [{ name: 'My Game' }],
      gog: [{ id: '1234567890' }],
      xbox: [{ id: 'PublisherName.MyGame' }],
      epic: [{ id: 'abc123def456' }],
      registry: [{ id: 'HKEY_LOCAL_MACHINE:Software\\MyGame:InstallPath' }],
    },
    // Environment variables set when launching the game executable
    environment: {
      SteamAPPId: '12345',
    },
    // Metadata used by Vortex and Nexus Mods integration
    details: {
      steamAppId: 12345,       // numeric Steam app ID for API lookups
      gogAppId: '1234567890',  // GOG app ID
      nexusPageId: 'mygame',   // the game's URL slug on nexusmods.com
      hashFiles: [             // files used to identify the game version via hashing
        'MyGame.exe',
        path.join('Data', 'Main.esm'),
      ],
    },
  });

  return true;
}
```

See: [`game-skyrimse`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-skyrimse) for a full example with multi-store support, or [`game-darksouls`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-darksouls), [`game-grimrock`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-grimrock) for simpler cases.

#### Custom installers

Extensions can register installers to handle game-specific mod formats. The installer tests whether it can handle an archive, then returns file placement instructions:

```ts
context.registerInstaller('rimworld-mod', 50, testSupported, installContent);

async function testSupported(files: string[]) {
  const hasManifest = files.find(f => path.basename(f) === 'About.xml') !== undefined;
  return { supported: hasManifest, requiredFiles: [] };
}

async function installContent(files: string[]) {
  const instructions = files
    .filter(f => !f.endsWith(path.sep))
    .map(f => ({ type: 'copy', source: f, destination: f }));
  return { instructions };
}
```

See: [`game-rimworld`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-rimworld), [`game-kenshi`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-kenshi), [`game-stardewvalley`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-stardewvalley), [`game-neverwinter-nights`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-neverwinter-nights) (file-extension-to-destination routing), [Cyberpunk 2077](https://github.com/E1337Kat/cyberpunk2077_ext_redux) (multi-type detection from a single archive), [Elden Ring](https://github.com/Senjay-id/eldenring-vortex-extension) (5 priority-based installers), [Ready Or Not](https://github.com/BeYkeRYkt/vortex_readyornot_extension) (type-specific test/install pairs)

#### Custom mod types

Games with multiple mod installation targets can register mod types so users can choose where files are deployed:

```ts
context.registerModType(
  'bg3-loose',
  25,
  (gameId) => gameId === 'baldursgate3',
  () => path.join(modsPath, 'Loose'),
  (instructions) => Promise.resolve(isLooseMod(instructions)),
  { name: 'Loose Files' },
);
```

See: [`game-baldursgate3`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-baldursgate3), [`game-stardewvalley`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-stardewvalley), [`game-nomanssky`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-nomanssky) (mod type migration between deprecated and current formats), [Oblivion Remastered](https://github.com/Nexus-Mods/game-oblivionremastered) (6 mod formats with architecture-aware paths)

#### Load order management

Games with strict plugin ordering can register a load order system:

```ts
context.registerLoadOrder({
  gameId: GAME_ID,
  deserializeLoadOrder: () => readCurrentOrder(),
  serializeLoadOrder: (order) => writeOrder(order),
  validate: (order) => checkForErrors(order),
  usageInstructions: 'Drag and drop to reorder plugins.',
});
```

See: [`game-baldursgate3`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-baldursgate3), [`game-morrowind`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-morrowind) (load order with validation and collections support), [Bannerlord](https://github.com/BUTR/game-mount-and-blade2) (auto-sort on deploy), [Ready Or Not](https://github.com/BeYkeRYkt/vortex_readyornot_extension) (prefix-based filesystem ordering), [Starfield](https://github.com/Nexus-Mods/game-starfield) (conditional LOOT integration)

#### Supported tools

Extensions can bundle tool definitions so users can launch community tools (script extenders, body editors, modding utilities) directly from Vortex:

```ts
const tools: ITool[] = [
  {
    id: 'skse64',
    name: 'Skyrim Script Extender 64',
    executable: () => 'skse64_loader.exe',
    requiredFiles: ['skse64_loader.exe'],
    relative: true,
    exclusive: true,
    defaultPrimary: true,
  },
];

context.registerGame({ ..., supportedTools: tools });
```

See: [`game-skyrimse`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-skyrimse), [`game-stardewvalley`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-stardewvalley), [`game-oblivion`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-oblivion)

#### Event hooks

Extensions can react to deployment, installation, and game mode changes:

```ts
context.once(() => {
  context.api.onAsync('did-deploy', async (profileId, deployment) => {
    // Called after mods are deployed - sync load order, write config, etc.
  });

  context.api.events.on('gamemode-activated', (gameId: string) => {
    // Called when the user switches game mode.
  });
});
```

For a full list of available events, see the [Events Reference](docs/EVENTS.md).

See: [`game-baldursgate3`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-baldursgate3), [`game-stardewvalley`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-stardewvalley), [`game-witcher3`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-witcher3) (extensive event-driven pipeline), [Oblivion Remastered](https://github.com/Nexus-Mods/game-oblivionremastered) (INI merge on `will-deploy`, Lua processing on `did-deploy`), [Elden Ring](https://github.com/Senjay-id/eldenring-vortex-extension) (auto-set primary tool on deploy)

#### File merge support

Extensions can register merge functions to combine files from multiple mods (e.g. XML config files):

```ts
context.registerMerge(
  (game, discovery) => canMerge(game, discovery),  // test: can this game merge?
  (filePath, mergePath) => doMerge(filePath, mergePath),  // perform the merge
  'merge-id',
);
```

See: [`game-dragonage`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-dragonage) (XML merge for AddIns.xml), [`game-witcher3`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-witcher3) (script merger tool integration), [Starfield](https://github.com/Nexus-Mods/game-starfield) (INI merge system)

#### Multi-game registration

A single extension can register multiple game variants:

```ts
function init(context: IExtensionContext) {
  context.registerGame({ id: 'neverwinter', name: 'Neverwinter Nights', ... });
  context.registerGame({ id: 'neverwinteree', name: 'Neverwinter Nights: Enhanced Edition', ... });
  return true;
}
```

See: [`game-neverwinter-nights`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-neverwinter-nights)

## Example extensions

These open-source extensions are good references for advanced patterns:

#### Built-in (bundled with Vortex)

- [`game-witcher3`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-witcher3) - 6 installers, script merger auto-download, XML merge support, collections, load order, custom reducers
- [`game-nomanssky`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-nomanssky) - mod type migration system that converts mods between deprecated and current formats
- [`game-morrowind`](https://github.com/Nexus-Mods/Vortex/tree/master/extensions/games/game-morrowind) - load order with validation, collections support, multi-language/locale handling

#### Community

#### [Cyberpunk 2077](https://github.com/E1337Kat/cyberpunk2077_ext_redux)

A large-scale extension supporting 14+ mod frameworks (REDmod, Red4Ext, CET, Redscript, TweakXL, etc.). Notable patterns:

- **Multi-type installer** - a single archive can contain multiple mod types; the extension detects and sequences them automatically ([installer.multitype.ts](https://github.com/E1337Kat/cyberpunk2077_ext_redux/blob/5a069f0/src/installer.multitype.ts))
- **Layout-based detection** - infers mod type from file structure rather than metadata, with legacy format auto-conversion ([installers.layouts.ts](https://github.com/E1337Kat/cyberpunk2077_ext_redux/blob/5a069f0/src/installers.layouts.ts))
- **Tool hooks** - intercepts tool execution to trigger REDmod deployment before launch ([tools.redmodding.ts](https://github.com/E1337Kat/cyberpunk2077_ext_redux/blob/5a069f0/src/tools.redmodding.ts))
- **Dynamic feature flags** - user-configurable features backed by Redux store ([features.ts](https://github.com/E1337Kat/cyberpunk2077_ext_redux/blob/5a069f0/src/features.ts))
- **Load order with REDmod deployment** - ties load order serialization to the REDmod compilation pipeline ([load_order.ts](https://github.com/E1337Kat/cyberpunk2077_ext_redux/blob/5a069f0/src/load_order.ts))
- **Game store DLC prompts** - detects Steam/GOG/Epic and prompts users to install REDmod DLC via store-specific protocol handlers ([redmodding.ts](https://github.com/E1337Kat/cyberpunk2077_ext_redux/blob/5a069f0/src/redmodding.ts))

#### [Mount & Blade II: Bannerlord](https://github.com/BUTR/game-mount-and-blade2)

A feature-rich extension with native module integration and save game management. Notable patterns:

- **Load order with auto-sort** - advanced load order management with auto-sort on deploy, bulk enable/disable, and per-profile persistence ([loadOrder/](https://github.com/BUTR/game-mount-and-blade2/tree/c04fced/src/loadOrder))
- **Save game viewer** - custom UI for browsing and loading save files with BLSE support ([views/](https://github.com/BUTR/game-mount-and-blade2/tree/c04fced/src/views))
- **Collections support** - full integration with Vortex collections including addung custom data such as load order and mod options ([collections/](https://github.com/BUTR/game-mount-and-blade2/tree/c04fced/src/collections))
- **Custom settings UI** - registers a game specific settings panels with sort-on-deploy, auto-fix toggles ([settings/](https://github.com/BUTR/game-mount-and-blade2/tree/c04fced/src/settings))

#### [Ready Or Not](https://github.com/BeYkeRYkt/vortex_readyornot_extension)

Handles 6 specialized mod types (FMOD audio, movies, configs, saves, binaries, root). Notable patterns:

- **Prefix-based load ordering** - uses alphabetic prefixes (`AAA_`, `AAB_`, ...) so filesystem sorting matches user-defined priority ([index.js](https://github.com/BeYkeRYkt/vortex_readyornot_extension/blob/9448452/index.js))
- **Type-specific installer pairs** - each mod type has paired `test*()` and `install*()` functions for validation and routing
- **Corrupt load order recovery** - gracefully handles corrupted `loadOrder.json` with auto-rebuild

#### [Valheim](https://github.com/sqrrlmstr/Valheim-Extension)

Manages BepInEx framework deployment and Thunderstore integration. Notable patterns:

- **Thunderstore API integration** - fetches and downloads BepInEx packs directly from the Thunderstore API with error handling and rate limiting ([index.js](https://github.com/sqrrlmstr/Valheim-Extension/blob/e52a287/index.js))
- **Per-mod directory isolation** - segregates each mod into `BepInEx/plugins/[ModName]/` to prevent naming conflicts
- **Timestamp-based conflict resolution** - compares file modification times to prevent unintended overwrites

#### [Elden Ring](https://github.com/Senjay-id/eldenring-vortex-extension)

Supports ModEngine 2 and seamless co-op mods. Notable patterns:

- **Framework auto-download** - `prepareForModding` downloads required mod framework dependencies during initial setup ([src/index.ts](https://github.com/Senjay-id/eldenring-vortex-extension/blob/47631fc/src/index.ts))
- **Auto-set primary tool** - `onDidDeploy` hook automatically sets ModEngine 2 as the primary tool when mods are deployed
- **Multi-installer routing** - 5 priority-based installers route mods to the correct handler based on type (co-op, mod loaders, DLLs, full ModEngine 2 mods)

#### Nexus-maintained

#### [Starfield](https://github.com/Nexus-Mods/game-starfield)

Supports Steam and Xbox Game Pass with platform-aware deployment. Notable patterns:

- **Directory junction strategy** - creates junctions between the game's Data folder and Documents path for unified mod deployment across platforms ([setup.ts](https://github.com/Nexus-Mods/game-starfield/blob/30ea5cb/src/setup.ts))
- **INI merge system** - merges ASI mod configurations into a unified INI file during deployment ([iniMerge.ts](https://github.com/Nexus-Mods/game-starfield/blob/30ea5cb/src/merges/iniMerge.ts))
- **Conditional LOOT integration** - load order with LOOT auto-sort when available, fallback to manual drag-and-drop ([StarFieldLoadOrder.tsx](https://github.com/Nexus-Mods/game-starfield/blob/30ea5cb/src/loadOrder/StarFieldLoadOrder.tsx))
- **Platform-specific installers** - separate installers for SFSE (Steam) and ASI loader (Xbox) ([installers/](https://github.com/Nexus-Mods/game-starfield/tree/30ea5cb/src/installers))

#### [Oblivion Remastered](https://github.com/Nexus-Mods/game-oblivionremastered)

Manages 6 mod formats for a UE5-based Gamebryo remaster. Notable patterns:

- **UE4SS auto-download** - automatically downloads and configures UE4SS framework from GitHub releases with version checking ([downloader.ts](https://github.com/Nexus-Mods/game-oblivionremastered/blob/489f6b9/src/downloader.ts))
- **Stop pattern validation** - regex-based file hierarchy validation to prevent invalid mod structures ([stopPatterns.ts](https://github.com/Nexus-Mods/game-oblivionremastered/blob/489f6b9/src/stopPatterns.ts))
- **Architecture-aware binaries** - handles Win64 vs WinGDK paths for Steam and Xbox builds ([modTypes.ts](https://github.com/Nexus-Mods/game-oblivionremastered/blob/489f6b9/src/modTypes.ts))
- **Deployment event pipeline** - INI merging on `will-deploy`, Lua mod processing on `did-deploy`, settings bake on load order change ([eventHandlers.ts](https://github.com/Nexus-Mods/game-oblivionremastered/blob/489f6b9/src/eventHandlers.ts))

## Issues and requests

For bugs and feature requests related to the API, please open an issue on the [Vortex repository](https://github.com/Nexus-Mods/Vortex/issues).

## License

[GPL-3.0](LICENSE.md)
