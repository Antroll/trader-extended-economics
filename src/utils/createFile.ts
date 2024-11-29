import * as fs from 'fs';

export function createFile(path: string, data: string): void {
  // if directory doesn't exist, create it
  const dir = path.split('/').slice(0, -1).join('/');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(path, data, 'utf-8');
}
