const readline = require('readline');
const fetch = require('node-fetch');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (q) => new Promise (resolve => rl.question(q, resolve));


(async () => {
    const token = await askQuestion("Digite seu Token:");
    process.stdout.write(`token: ${token}\n`); 
    setTimeout(() => {
        rl.close();
    }, 2000);
})();
