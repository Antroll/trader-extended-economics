import * as fs from 'fs';

/**
 * Creates a file at the given path with the given data.
 *
 * @param path - The path to the file.
 * @param data - The data to write to the file.
 */
export function createFile(path: string, data: string): void {
  // if directory doesn't exist, create it
  const dir = path.split('/').slice(0, -1).join('/');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(path, data, 'utf-8');
  console.log(`JSON-file sucessfuly created: ${path}`);
}
