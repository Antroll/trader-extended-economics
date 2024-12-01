import * as path from 'path';
import { DIST_FOLDER, VALHEIM_BEPIEX_CONFIG_PATH } from './const';
import { copyJsonFiles } from './utils/copyJsonFiles';

const targetDirectory = path.resolve(VALHEIM_BEPIEX_CONFIG_PATH);

copyJsonFiles(DIST_FOLDER, targetDirectory);
