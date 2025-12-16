"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterArgs = filterArgs;
exports.relaunch = relaunch;
const commander_1 = __importDefault(require("commander"));
const electron_1 = require("electron");
const process = __importStar(require("process"));
const application_1 = require("./application");
const startupSettings_1 = __importDefault(require("./startupSettings"));
function assign(input, prev) {
    const [key, value] = input.split("=");
    return (prev !== null && prev !== void 0 ? prev : []).concat([{ key, value }]);
}
function collect(value, prev) {
    return (prev !== null && prev !== void 0 ? prev : []).concat([value]);
}
const ARG_COUNTS = {
    "-d": 1,
    "-i": 1,
    "-g": 1,
    "-s": 1,
    "--download": 1,
    "--install": 1,
    "--install-archive": 1,
    "--install-extension": 1,
    "--start-minimized": 1,
    "--game": 1,
    "--profile": 1,
    "--get": 1,
    "--set": 1,
    "--del": 1,
    "--run": 1,
    "--report": 1,
    "--restore": 1,
    "--merge": 1,
    "--max-memory": 1,
    "--user-data": 1,
};
const electronExecutable = process.platform === "win32" ? "electron.exe" : "electron";
// Chrome rearranges the command line parameters it passes to processes it spawns internally
// by putting switches (--foo) first, arguments (bar) after.
// Which is fine in chrome because it's internal processes.
// The <insert insult here>s developing electron make this internal chrome behaviour part of
// their api, basically breaking all sensible user-facing clis:
// https://github.com/electron/electron/issues/20322
//
// Fortunately, looking at the code, at least chrome seems to keep the order of switches and
// arguments so since we don't have positional arguments and as long as we know which
// switches expect an argument and as long as the
// command line passed in is valid, we should be able to reconstruct it.
function electronIsShitArgumentSort(argv) {
    const firstArgumentIdx = argv.findIndex((arg, idx) => idx > 1 && !arg.startsWith("-"));
    const switches = argv.slice(1, firstArgumentIdx - 1);
    const args = argv.slice(firstArgumentIdx);
    let nextArg = 0;
    const res = [argv[0]];
    if (argv[0].includes(electronExecutable)) {
        // did I say we have no positional arguments? Well, electron does...
        res.push(args[nextArg]);
        nextArg++;
    }
    switches.forEach((sw) => {
        res.push(sw);
        const argCount = ARG_COUNTS[sw] || 0;
        res.push(...args.slice(nextArg, nextArg + argCount));
        nextArg += argCount;
    });
    // append all remaining arguments. This way if we do have positional arguments
    // after all, as long as they're at the end they will still work
    res.push(...args.slice(nextArg));
    return res;
}
/**
 * I think we are going to need this to transform what epic sends us which we can't help into
 * something that our commander.js library is going to parse successfully without going crazy
 * and replacing the parsing library.
 *
 * I think we are hitting walls atm with having only a single hyphen but with a word and a =
 */
function transformEpicArguments(argv) {
    var epicParameterSwaps = {
        "-AUTH_LOGIN": "--epic-auth-login",
        "-AUTH_PASSWORD": "--epic-auth-password",
        "-AUTH_TYPE": "--epic-auth-type",
        "-epicapp": "--epic-app",
        "-epicenv": "--epic-env",
        "-EpicPortal": "--epic-portal",
        "-epicusername": "--epic-username",
        "-epicuserid": "--epic-userid",
        "-epiclocale": "--epic-locale",
        "-epicsandboxid": "--epic-sandboxid",
    };
    var resultArr = argv.map((element) => {
        for (const key in epicParameterSwaps) {
            if (element.indexOf(key) !== -1) {
                return element.replace(key, epicParameterSwaps[key]);
            }
        }
        return element;
    });
    return resultArr;
}
function parseCommandline(argv, electronIsShitHack) {
    // lets look and replace epic stuff?!
    argv = transformEpicArguments(argv);
    if (!argv[0].includes(electronExecutable)) {
        argv = ["dummy"].concat(argv);
    }
    if (electronIsShitHack) {
        argv = electronIsShitArgumentSort(argv);
    }
    let version = "1.0.0";
    try {
        // won't happen in regular operation but lets us test this function outside vortex
        version = (0, application_1.getApplication)().version;
    }
    catch (err) {
        // nop
    }
    const commandLine = commander_1.default
        .command("Vortex")
        .version(version)
        .option("-d, --download <url>", "Start downloadling the specified url " +
        "(any supported protocol like nxm:, https:, ...).")
        .option("-i, --install <url>", "Start downloadling & installing the specified url " +
        "(any supported protocol like nxm:, https:, ...).")
        .option("--install-archive <path>", "Start installing the specified archive. Use absolute path.")
        .option("--install-extension <id>", "Start downloadling & installing the specified " +
        'vortex extension. id can be "modId:<number>".')
        .option("-g, --get <path>", "Print the state variable at the specified path and quit. " +
        "This can be used repeatedly to print multiple items", collect)
        .option("-s, --set <path=value>", "Change a value in the state. Please be very careful " +
        "with this, incorrect use will break Vortex and you may " +
        "lose data", assign)
        .option("--del <path>", "Remove a value in state", collect)
        .option("--user-data <path>", "Starts Vortex with a custom directory for the user data. " +
        "Only use if you know what you're doing.")
        .option("--start-minimized", "Starts Vortex in the task bar")
        .option("--game <game id>", "Starts Vortex with a different game enabled")
        .option("--run <path>", "Execute the js program instead of Vortex itself.")
        .option("--report <path>", "Send an error report. For internal use")
        .option("--restore <path>", "Restore a state backup")
        .option("--merge <path>", "Merge a state backup. Unlike restore, the content of the specified " +
        "state file will be merged into the existing state.")
        .option("--shared", "Used in conjunction with set, get or del, this will access the database" +
        "in the shared location instead of the per-user one")
        .option("--max-memory <size in MB>", "Maximum amount of memory Vortex may use in MB " + "(defaults to 4096)")
        .option("--inspector", "Start Vortex with the chrome inspector opened")
        .option("--profile <profile id>", "Start Vortex with a specific profile active")
        .option("--epic-auth-login <login>")
        .option("--epic-auth-password <password>")
        .option("--epic-auth-type <type>")
        .option("--epic-app <app>")
        .option("--epic-env <env>")
        .option("--epic-portal")
        .option("--epic-username <username>")
        .option("--epic-userid <userid>")
        .option("--epic-locale <locale>")
        .option("--epic-sandboxid <sandboxid>")
        // allow unknown options since they may be interpreted by electron/node
        .allowUnknownOption(true)
        .parse(argv || [])
        .opts();
    return Object.assign(Object.assign({}, startupSettings_1.default), commandLine);
}
// arguments that should be dropped when restarting the application
const SKIP_ARGS = {
    "-d": 1,
    "--download": 1,
    "-i": 1,
    "--start-minimized": 1,
    "--game": 1,
    "--profile": 1,
    "--install": 1,
    "--install-archive": 1,
    "--install-extension": 1,
    "--restore": 1,
    "--merge": 1,
};
function filterArgs(input) {
    let skipCount = 0;
    const result = [];
    input.forEach((arg, idx) => {
        if (skipCount > 0) {
            skipCount--;
        }
        else if (idx === 0) {
            // skip
        }
        else if (SKIP_ARGS[arg] !== undefined) {
            skipCount = SKIP_ARGS[arg];
        }
        else {
            result.push(arg);
        }
    });
    return result;
}
function relaunchImpl(args) {
    electron_1.app.relaunch({ args: [...filterArgs(process.argv), ...(args || [])] });
    electron_1.app.quit();
}
if (electron_1.ipcMain !== undefined) {
    electron_1.ipcMain.on("relaunch-self", (evt, args) => {
        relaunchImpl(args);
    });
}
function relaunch(args) {
    if (electron_1.ipcRenderer !== undefined) {
        electron_1.ipcRenderer.send("relaunch-self", args);
    }
    else {
        relaunchImpl(args);
    }
}
exports.default = parseCommandline;
