import { cp } from "node:fs/promises";

const copy = async () => {
    // Write your code here 
    const srcDirectory = "./src/fs/files";
    const destDirectory = "./src/fs/files_copy";

    try{
        await cp(srcDirectory, destDirectory, {
            errorOnExist: true,
            recursive: true,
            force: false,
        });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await copy();
