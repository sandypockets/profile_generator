const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const thanks = 'Thanks for answering!';

rl.question('What\'s your name? Nicknames are also acceptable :\) ', (answer1) => {
  console.log(thanks);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(thanks);
    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(thanks);
      rl.question('Which meal is your favourit? \(dinner, brunch, etc\) ', (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}! ${answer1}'s favourite meal is ${answer4}, especially when it's ${answer5}. ${answer1} is a big ${answer6} fan, and is super great at ${answer7}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});