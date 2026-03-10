export type LockedState = true | false | "true" | "false" | "always" | "never";
export type LoadOrder = ILoadOrderEntry[];
export interface IItemRendererProps {
    loEntry: ILoadOrderEntry;
    displayCheckboxes: boolean;
    invalidEntries?: IInvalidResult[];
    setRef?: (ref: any) => void;
}
export interface ILoadOrderEntryExt extends ILoadOrderEntry {
    index: number;
    fileId?: number | undefined;
}
export interface ILoadOrderEntry<T = any> {
    id: string;
    enabled: boolean;
    name: string;
    locked?: LockedState;
    modId?: string;
    data?: T;
}
export interface IInvalidResult {
    id: string;
    reason: string;
}
export interface IValidationResult {
    invalid: IInvalidResult[];
}
export interface ILoadOrderGameInfo {
    gameId: string;
    /**
     * Defaults to true unless specified otherwise.
     * Will add a checkbox for each load order entry.
     * The checkboxes will control the LO entry's "enabled" property.
     */
    toggleableEntries?: boolean;
    /**
     * Defaults to true unless specified otherwise.
     *  The load order will get cleared upon purge by default.
     * Set this to false if you want to preserve the load order.
     */
    clearStateOnPurge?: boolean;
    /**
     * Extension developers are able to provide usage instructions to be displayed
     *  in the load order page alongside the load order panel.
     *  Default instructions will be provided if custom instructions aren't provided.
     */
    usageInstructions?: string | React.ComponentType<{}>;
    /**
     * Extension developers are able to provide a custom item renderer for the
     *  load order page. This will get rendered instead of the default one.
     */
    customItemRenderer?: React.ComponentType<{
        className?: string;
        item: IItemRendererProps;
        forwardedRef?: (ref: any) => void;
    }>;
    /**
     * By default the FBLO extension will attempt to automatically generate the data
     *  required when publishing/exporting a collection; the noCollectionGeneration
     *  property allows game extensions to opt out of this functionality, which is useful
     *  if/when the default generation logic is insufficient for a particular game.
     */
    noCollectionGeneration?: boolean;
    /**
     * The load order page will call this functor whenever it is necessary
     *  to write a change to disk. It is up to the game extension developer to decide
     *  where/how to store this information,. Obviously - the data should be
     *  formatted in a way where it is easily deserializeable by the
     *  deserializeLoadOrder functor)
     *
     *  This functor will always be called AFTER the validate functor had
     *   a chance to ensure that any changes made to the LO are not invalid.
     *   (will not be called at all if change is not valid)
     *
     *  Expect the functor to be called whenever a load order change is
     *   applied (drag-drop, props update, etc.)
     *
     *  @param loadOrder An array consisting of load order objects which we want stored on disk.
     *    Please note that the load order array sent to the game extension's
     *    serialize functor will be sorted in the expected load order
     *
     *  @param prev the load order array state before serialization.
     */
    serializeLoadOrder: (loadOrder: LoadOrder, prev: LoadOrder) => Promise<void>;
    /**
     * Game extension should parse the Load Order file stored on disk using the
     *  same format used when serializing it in serializeLoadOrder and provide
     *  a populated load order array in the correct order.
     *
     * Please note that the validate functor will be called to verify the deserialized
     *  load order object immediately after the deserialization functor completes its
     *  operation to ensure that any newly inserted element (through manual intervention or
     *  through the game's interface) is valid.
     *
     * If for any reason the change is _not_ valid or the deserialization operation had failed,
     *  the load order will be reverted and locked until the the error is handled by
     *  the user. An error notification _will_ be raised notifying the user of any errors.
     *
     * Deserialization will be called:
     *  - As soon as the Load Order page is mounted/loaded.
     *
     *  - After the user exits a configured tool or the game to regenerate the LO
     *    in case the user had changed it while using said tool/game
     *
     *  - If the user changes profiles.
     *
     *  - On deploy/purge to ensure the user hadn't modified the mod list manually
     *    or through an external tool.
     *  @returns An object containing a deserialized array of LO entries.
     */
    deserializeLoadOrder: () => Promise<LoadOrder>;
    /**
     * Called to validate a load order object - it is the game extension's
     *  responsibility to ensure that the object is formatted correctly and that
     *  it does not breach any set rules (e.g. a locked entry had been moved to an invalid
     *  position)
     *
     * Functor is called:
     *
     * - Before serialization occurs to ensure we don't serialize and write invalid LO
     *
     * - After deserialization to ensure any invalid user tampering or changes made through the
     *   game UI is validated and removed if necessary.
     *
     * @param prev the load order array state before the serialization/deserialization
     *             functionality has been executed.
     *
     * @param current the load order array state we either want to serialize, or have
     *                deserialized and want to ensure its valid.
     *
     * @returns a validation result specifying any invalid entries - these will be displayed
     *          to the user in the load order page (accompanied by an error notification)
     *          validation passes if the validate function call returns undefined, signifying
     *          that no invalid entries have been found.
     *
     */
    validate: (prev: LoadOrder, current: LoadOrder) => Promise<IValidationResult>;
    /**
     * Predicate to allow the game extension to decide wheter the load order page should be visible
     *  (In case the game extension wants to hide or switch between different LO management logic)
     * @returns true if the load order page should be visible, false otherwise.
     */
    condition?: () => boolean;
}
export interface ILoadOrderGameInfoExt extends ILoadOrderGameInfo {
    isContributed: boolean;
}
export declare class LoadOrderValidationError extends Error {
    private mValidationRes;
    private mLoadOrder;
    constructor(validationRes: IValidationResult, loadOrder: LoadOrder);
    get validationResult(): IValidationResult;
    get loadOrder(): LoadOrder;
    get loadOrderEntryNames(): string;
}
export declare class LoadOrderSerializationError extends Error {
    private mLoadOrder;
    constructor(loadOrder: LoadOrder);
    get loadOrder(): string;
}
