import { argv } from 'node:process';

const parseArgs = () => {
    // Write your code here 
    const args = argv.slice(2);
    const result = args.reduce((acc, curr, index) => {
       if(index % 2 === 0) {
            const key = curr.replace('--', '');
            const value = args[index + 1];
            acc.push(`${key} is ${value}`);
        }
        return acc;
    }
    , []);
    console.log(result.join(', '));
    
};

parseArgs();