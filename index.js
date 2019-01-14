const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Lets begin ${answer}`);

  rl.close();
});
