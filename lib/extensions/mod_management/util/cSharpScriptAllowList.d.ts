export interface IAllowListKey {
    domainName: string;
    numericGameId: number;
    internalId: string;
}
/**
 * Get the CSharp script allow list for a specific game.
 * @param gameId internal game id (i.e. falloutnv)
 * @returns a set of allowed mod IDs
 */
export declare const getCSharpScriptAllowListForGame: (gameId: string) => Set<string>;
