import { rename as renameFile } from "node:fs/promises";
const rename = async () => {
    // Write your code here 
    const oldPath = "./src/fs/files/wrongFilename.txt";
    const newPath = "./src/fs/files/properFilename.md";
    try {
        await renameFile(oldPath, newPath);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await rename();