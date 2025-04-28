import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { stdin, stdout } from "node:process";

const transform = async () => {
    // Write your code here 
    const reverseStream = new Transform({
        transform(chunk, encoding, cb) {
            const inputStr = chunk.toString();
            const reversedStr = [...inputStr].reverse().join("");;
            cb(null, reversedStr + "\n".repeat(2));
        },
    });

    try {
        await pipeline(stdin, reverseStream, stdout);
    }
    catch (error) {
        console.error("Pipeline failed.", error);
    }
};

await transform();