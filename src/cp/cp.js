import { spawn } from "node:child_process";

 const spawnChildProcess = async (args) => {

     return new Promise((resolve) => {
         const childProcess = spawn('node', ["./src/cp/files/script.js", ...args], {
             stdio: ['inherit', 'inherit', 'inherit']
         });

         childProcess.on('close', (code) => {
             console.log(`Child process exited with code ${code}`);
             resolve();
         });
     });
 };

// Put your arguments in function call to test this functionality
spawnChildProcess( ["someArgument1", "someArgument2"]);
