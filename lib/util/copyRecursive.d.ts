import Promise from 'bluebird';
/**
 * custom implementation of recursive directory copying.
 * copy from fs-extra does this already, but that function has no limit on the number
 * of files it will copy at once making it fairly inefficient, especially on spinning
 * disks and unpredictable in regards to memory usage.
 *
 * TODO: This implementation could do with more real world testing and optimization
 *   (maybe even adapting to whether copying many small files or few large ones and
 *    the disk type and different OSes)
 *
 * @param {string} source source path to copy from
 * @param {string} destination destination path to copy to
 */
declare function copyRecursive(source: string, destination: string): Promise<void>;
export default copyRecursive;
