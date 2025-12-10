// /src/utils/saveJson.js
import fs from 'fs';
import path from 'path';

export function saveJsonFile(data, fileName = 'data.json') {
  const filePath = path.join(process.cwd(), 'src', 'data', fileName);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

  console.log(`Saved file: ${filePath}`);
  return filePath;
}
