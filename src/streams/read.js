import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    // Write your code here 
    return new Promise((resolve, reject) => {
        const stream = createReadStream("./src/streams/files/fileToRead.txt", { encoding: "utf8" });
        stream.pipe(stdout);

        stream.on('end', () => {
            stdout.write('\n');
            resolve();
        });
    });
};

await read();