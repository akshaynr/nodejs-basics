import {
    createReadStream,
    createWriteStream,
} from "node:fs";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

const decompress = async () => {
    // Write your code here 
    const gzip = createGunzip();
    const source = createReadStream('./src/zip/files/archive.gz');
    const destination = createWriteStream('./src/zip/files/fileToCompress.txt');

    await pipeline(source, gzip, destination);
};

await decompress();