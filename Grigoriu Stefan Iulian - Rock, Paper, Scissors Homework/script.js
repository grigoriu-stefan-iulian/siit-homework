
function play() {

    function choise() {
        var x = Math.floor(Math.random() * 3);
        var array = ['Rock', 'Paper', 'Scissors'];
        return array[x];
    }

    var computerChoice = choise();    
    console.log('Computer: ' + '"' + computerChoice + '"');

    var userChoice = choise();
    console.log('You: ' + '"' + userChoice + '"');

    if (computerChoice == userChoice) {
        console.log('It is a tie!');
    } else {
        if (userChoice === 'Rock') {
            if (computerChoice === 'Scissors') {
                console.log('You won!');
            } else {
                console.log('You lost!');
            }
        }

        if (userChoice === 'Paper') {
            if (computerChoice === 'Rock') {
                console.log('You won!');
            } else {
                console.log('You lost!');
            }
        }

        if (userChoice === 'Scissors') {
            if (computerChoice === 'Rock') {
                console.log('You lost!');
            } else {
                console.log('You won!');
            }
        }
    }
}
play();
