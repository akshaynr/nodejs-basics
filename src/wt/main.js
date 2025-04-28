import  os from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
    // Write your code here
    const numCPUCores = os.cpus().length;
    const workers = [];
    const result = [];
    for(let i=0; i<numCPUCores; i++){
        const worker = new Worker("./src/wt/worker.js");
        workers.push(worker);

        worker.postMessage(10 + i);

        worker.on("message", (data) => {
            result[i] = {
                status: "resolved",
                data
            };
            
            if(result.length === numCPUCores){
                console.log(result);
            }
        });

        worker.on("error", (error) => {
            result[i] = {
                status: "error",
                data: null
            };
            
            if(result.length === numCPUCores){
                console.log(result);
            }
        });
    }
};

await performCalculations();