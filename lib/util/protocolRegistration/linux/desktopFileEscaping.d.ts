/**
 * Escape a value for desktop-entry fields that use the `string` type.
 *
 * Note(sewer)
 * For other fields 'string' and 'localestring':
 * The escape sequences \s, \n, \t, \r, and \\ are supported for values of
 * type string and localestring, meaning ASCII space, newline, tab, carriage
 * return, and backslash, respectively.
 *
 * Note that 'Exec' is a string.
 * ref: https://github.com/Nexus-Mods/NexusMods.App/blob/main/src/NexusMods.Backend/OS/LinuxInterop.Protocol.cs#L235-L251
 * spec: https://specifications.freedesktop.org/desktop-entry-spec/latest/value-types.html
 */
export declare function escapeDesktopFilePath(input: string): string;
/**
 * Escape a single argument value for desktop-entry `Exec=`.
 *
 * Note(sewer)
 * For the exec field. Quoted relevant parts below.
 * https://specifications.freedesktop.org/desktop-entry-spec/latest/exec-variables.html
 *
 * "Arguments may be quoted in whole. If an argument contains a reserved
 *  character the argument must be quoted. The rules for quoting of arguments
 *  is also applicable to the executable name or path of the executable
 *  program as provided."
 *
 * "Quoting must be done by enclosing the argument between double quotes and
 *  escaping the double quote character, backtick character (`), dollar sign ($)
 *  and backslash character (\) by preceding it with an additional backslash
 *  character."
 *
 * If escaping changes the input, the argument is wrapped in quotes.
 *
 * ref: https://github.com/Nexus-Mods/NexusMods.App/blob/main/src/NexusMods.Backend/OS/LinuxInterop.Protocol.cs#L164-L233
 * spec: https://specifications.freedesktop.org/desktop-entry-spec/latest/exec-variables.html
 */
export declare function escapeDesktopExecFilePath(input: string): string;
