import * as path from 'path';
import { DIST_FOLDER, PROFILE_PATH } from './const';
import { copyJsonFiles } from './utils/copyJsonFiles';

if (!PROFILE_PATH) {
  throw new Error('PROFILE_PATH is not set');
}

/**
 * Path to the BepInEx config folder where the files will be copied to.
 */
const VALHEIM_BEPIEX_CONFIG_PATH = `${PROFILE_PATH}/BepInEx/config`;

const targetDirectory = path.resolve(VALHEIM_BEPIEX_CONFIG_PATH);

copyJsonFiles(DIST_FOLDER, targetDirectory);
