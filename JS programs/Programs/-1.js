// Way 1: Pass name as command-line argument
//        Run: node -1.js Shaheena
// Way 2: Interactive input (run in terminal, not Code Runner)

const name = process.argv[2];

if (name) {
  // If name is passed as argument
  console.log(`Hello, ${name}!`);
} else {
  // If no argument, ask for input
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter your name: ", (input) => {
    console.log(`Hello, ${input}!`);
    rl.close();
  });
}
