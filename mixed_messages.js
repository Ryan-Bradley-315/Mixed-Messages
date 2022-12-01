// This program will generate random messages based on user prompting.
// There are 10 options for output based on an array of available phrases.
// Each output will display a highly sarcastic motivational message.

// Opening the input interface:
const readline = require('readline');
const rl = 
    readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

// Creating the variables for user input and default responses:
let answer = '';
const responses = [ 'Succeed in spite of management',
                    '"You miss 100% of the shots you don\'t take" -Wayne Gretzky -Michael Scott',
                    'The beatings will continue until morale improves',
                    'Never put off until tomorrow what you can avoid altogether',
                    'Eagles may soar, but weasles don\'t get sucked into jet engines',
                    'When the going gets tough, the tough take a coffee break',
                    'Aim Low - Reach Your Goals - Avoid Disappointment',
                    'Plagarism saves time',
                    'If at first you don\'t succeed, try management',
                    'Hang in there, retirement is only fifty years away!'];

// This recursive function handles the prompting and collection of user input and provides the random response.
let questionCycle = () => {
    rl.question('Would you like some motivation? (Enter "yes" or "no")\n', function (string) {
        answer = string;
        if (answer === 'yes') {
            let randomIndex = Math.floor(Math.random() * 10);
            let randomPhrase = `${responses[randomIndex]}`;
            console.log('\n' + randomPhrase + '\n');
            questionCycle();
        } else {
            rl.close();
        }
    });
};

// The function is called here to begin the recursion.
questionCycle();