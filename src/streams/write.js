import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { stdin } from "node:process";

const write = async () => {
    // Write your code here 
    const writableStream = createWriteStream("./src/streams/files/fileToWrite.txt");
    try {
        await pipeline(stdin, writableStream);
    } catch (error) {
        console.error("Pipeline failed.");
    }
};

await write();