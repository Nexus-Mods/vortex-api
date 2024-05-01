[vortex_devel](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / ILoadOrderGameInfo

# Interface: ILoadOrderGameInfo

[types](../modules/types.md).ILoadOrderGameInfo

## Table of contents

### Properties

- [gameId](types.ILoadOrderGameInfo.md#gameid)
- [noCollectionGeneration](types.ILoadOrderGameInfo.md#nocollectiongeneration)
- [toggleableEntries](types.ILoadOrderGameInfo.md#toggleableentries)
- [usageInstructions](types.ILoadOrderGameInfo.md#usageinstructions)

### Methods

- [deserializeLoadOrder](types.ILoadOrderGameInfo.md#deserializeloadorder)
- [serializeLoadOrder](types.ILoadOrderGameInfo.md#serializeloadorder)
- [validate](types.ILoadOrderGameInfo.md#validate)

## Properties

### gameId

• **gameId**: `string`

#### Defined in

../src/extensions/file_based_loadorder/types/types.ts:69

___

### noCollectionGeneration

• `Optional` **noCollectionGeneration**: `boolean`

By default the FBLO extension will attempt to automatically generate the data
 required when publishing/exporting a collection; the noCollectionGeneration
 property allows game extensions to opt out of this functionality, which is useful
 if/when the default generation logic is insufficient for a particular game.

#### Defined in

../src/extensions/file_based_loadorder/types/types.ts:91

___

### toggleableEntries

• `Optional` **toggleableEntries**: `boolean`

Defaults to true unless specified otherwise.
Will add a checkbox for each load order entry.
The checkboxes will control the LO entry's "enabled" property.

#### Defined in

../src/extensions/file_based_loadorder/types/types.ts:76

___

### usageInstructions

• `Optional` **usageInstructions**: `string` \| `ComponentType`<{}\>

Extension developers are able to provide usage instructions to be displayed
 in the load order page alongside the load order panel.
 Default instructions will be provided if custom instructions aren't provided.

#### Defined in

../src/extensions/file_based_loadorder/types/types.ts:83

## Methods

### deserializeLoadOrder

▸ **deserializeLoadOrder**(): `Promise`<[`LoadOrder`](../modules/types.md#loadorder)\>

Game extension should parse the Load Order file stored on disk using the
 same format used when serializing it in serializeLoadOrder and provide
 a populated load order array in the correct order.

Please note that the validate functor will be called to verify the deserialized
 load order object immediately after the deserialization functor completes its
 operation to ensure that any newly inserted element (through manual intervention or
 through the game's interface) is valid.

If for any reason the change is _not_ valid or the deserialization operation had failed,
 the load order will be reverted and locked until the the error is handled by
 the user. An error notification _will_ be raised notifying the user of any errors.

Deserialization will be called:
 - As soon as the Load Order page is mounted/loaded.

 - After the user exits a configured tool or the game to regenerate the LO
   in case the user had changed it while using said tool/game

 - If the user changes profiles.

 - On deploy/purge to ensure the user hadn't modified the mod list manually
   or through an external tool.

#### Returns

`Promise`<[`LoadOrder`](../modules/types.md#loadorder)\>

An object containing a deserialized array of LO entries.

#### Defined in

../src/extensions/file_based_loadorder/types/types.ts:139

___

### serializeLoadOrder

▸ **serializeLoadOrder**(`loadOrder`): `Promise`<`void`\>

The load order page will call this functor whenever it is necessary
 to write a change to disk. It is up to the game extension developer to decide
 where/how to store this information,. Obviously - the data should be
 formatted in a way where it is easily deserializeable by the
 deserializeLoadOrder functor)

 This functor will always be called AFTER the validate functor had
  a chance to ensure that any changes made to the LO are not invalid.
  (will not be called at all if change is not valid)

 Expect the functor to be called whenever a load order change is
  applied (drag-drop, props update, etc.)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loadOrder` | [`LoadOrder`](../modules/types.md#loadorder) | An array consisting of load order objects which we want stored on disk.    Please note that the load order array sent to the game extension's    serialize functor will be sorted in the expected load order |

#### Returns

`Promise`<`void`\>

#### Defined in

../src/extensions/file_based_loadorder/types/types.ts:111

___

### validate

▸ **validate**(`prev`, `current`): `Promise`<[`IValidationResult`](types.IValidationResult.md)\>

Called to validate a load order object - it is the game extension's
 responsibility to ensure that the object is formatted correctly and that
 it does not breach any set rules (e.g. a locked entry had been moved to an invalid
 position)

Functor is called:

- Before serialization occurs to ensure we don't serialize and write invalid LO

- After deserialization to ensure any invalid user tampering or changes made through the
  game UI is validated and removed if necessary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prev` | [`LoadOrder`](../modules/types.md#loadorder) | the load order array state before the serialization/deserialization             functionality has been executed. |
| `current` | [`LoadOrder`](../modules/types.md#loadorder) | the load order array state we either want to serialize, or have                deserialized and want to ensure its valid. |

#### Returns

`Promise`<[`IValidationResult`](types.IValidationResult.md)\>

a validation result specifying any invalid entries - these will be displayed
         to the user in the load order page (accompanied by an error notification)
         validation passes if the validate function call returns undefined, signifying
         that no invalid entries have been found.

#### Defined in

../src/extensions/file_based_loadorder/types/types.ts:166
