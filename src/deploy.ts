import * as fs from 'fs';
import * as path from 'path';
import { DIST_FOLDER } from './const';

function copyJsonFiles(sourceDir: string, targetDir: string) {
  // Read files from the source directory
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      // Error reading directory
      console.error(`Error reading directory: ${err}`);
      return;
    }

    // Filter only JSON files
    const jsonFiles = files.filter(file => path.extname(file) === '.json');

    // Copy each JSON file to the target directory
    jsonFiles.forEach(file => {
      const sourceFile = path.join(sourceDir, file);
      const targetFile = path.join(targetDir, file);

      fs.copyFile(sourceFile, targetFile, err => {
        if (err) {
          console.error(`Error copying file ${file}: ${err}`);
        } else {
          console.log(`File ${file} successfully copied to ${targetDir}`);
        }
      });
    });
  });
}

const targetDirectory = path.resolve(
  'C:/Users/Anton/AppData/Roaming/r2modmanPlus-local/Valheim/profiles/My Ashlands/BepInEx/config',
); // Specify the absolute path

copyJsonFiles(DIST_FOLDER, targetDirectory);
