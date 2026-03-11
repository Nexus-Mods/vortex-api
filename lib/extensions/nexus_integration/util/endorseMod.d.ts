import type NexusT from "@nexusmods/nexus-api";
import PromiseBB from "bluebird";
/**
 * endorse the mod by the server call
 *
 * @param {string} activeGameId
 * @param {NexusT} nexus
 * @param {string} endorseStatus
 * @param {string} modId,
 * @return {boolean} isEndorsed
 *
 */
declare function endorseMod(nexus: NexusT, gameId: string, nexusModId: number, version: string, endorseStatus: string): PromiseBB<string>;
declare function endorseCollection(nexus: NexusT, gameId: string, collectionId: number, endorseStatus: string): PromiseBB<{
    success: boolean;
}>;
export { endorseCollection, endorseMod };
