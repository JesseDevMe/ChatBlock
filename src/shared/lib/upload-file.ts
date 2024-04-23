import { writeFile } from 'fs';
import path from 'path';
import { v4 as uuidv4} from 'uuid';
import 'server-only'

async function uploadFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = uuidv4() + file.name;
  const url = path.resolve(`./public/upload/${fileName}`);
  await writeFile(url, buffer, (err) => {
    if (err) {
      throw new Error(err.message);
    } else {
      // file written successfully
    }
  });

  return fileName;
}

export default uploadFile;