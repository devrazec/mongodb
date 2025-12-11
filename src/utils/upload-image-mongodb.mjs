import { MongoClient, GridFSBucket } from 'mongodb';
import fs from 'fs';
import path from 'path';

const uri = '';
const client = new MongoClient(uri);

async function uploadImage(bucket, filePath, filename) {
  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(filename);
    const readStream = fs.createReadStream(filePath);

    readStream
      .pipe(uploadStream)
      .on('error', err => reject(err))
      .on('finish', () => resolve(uploadStream.id));
  });
}

async function run() {
  try {
    await client.connect();
    const db = client.db('mydb');
    const bucket = new GridFSBucket(db, { bucketName: 'product_images' });

    const folder = '/Users/user/projects/mongodb/public/img/product';
    const files = fs.readdirSync(folder);

    const map = {};

    for (const file of files) {
      const fullPath = path.join(folder, file);
      console.log('Uploading:', file);

      const id = await uploadImage(bucket, fullPath, file);
      console.log('✓ Uploaded', file, '→', id);

      map[file] = id.toString();
    }

    fs.writeFileSync('image-map.json', JSON.stringify(map, null, 2));
    console.log('\n✔ All images uploaded!');
    console.log('✔ image-map.json created successfully\n');
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await client.close();
  }
}

run();
