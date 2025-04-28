import { writeFile } from "node:fs/promises";

const create = async () => {
    // Write your code here 
    const path = "./src/fs/files/fresh.txt";
    const content = "I am fresh and young";
    const options = {
        flag: "wx", // 'wx' flag to ensure the file is created only if it does not exist
    }
    try {
        await writeFile(path, content, options);
    } catch (error) {
        throw new Error("FS operation failed");
    }

};

await create();