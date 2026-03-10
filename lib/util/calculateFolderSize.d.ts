import Bluebird from "bluebird";
declare function calculateFolderSize(dirPath: string): Bluebird<number>;
export default calculateFolderSize;
