import { readFile } from "node:fs/promises";

const read = async () => {
    // Write your code here 
    try {
        
        const data = await readFile("./src/fs/files/fileToRead.txt", { encoding: "utf8" });
        console.log(data);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await read();