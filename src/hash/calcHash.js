import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const calculateHash = async () => {
    // Write your code here 

    return new Promise((resolve, reject) => {
        const hash = createHash("sha256");
        const inputFile = "./src/hash/files/fileToCalculateHashFor.txt";
        const data = createReadStream(inputFile);

        data.pipe(hash).setEncoding("hex").pipe(stdout);

        data.on("end", () => {
            stdout.write('\n');
            resolve();
        });
    });

};

await calculateHash();