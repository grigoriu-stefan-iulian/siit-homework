
function play() {

    function choise() {
        var x = Math.floor(Math.random() * 3);
        var array = ['Rock', 'Paper', 'Scissors'];
        return array[x];
    }

    var computerChoice = choise();
    document.getElementById('pick-one').innerHTML = computerChoice;

    var userChoice = choise();
    document.getElementById('pick-two').innerHTML = userChoice;

    if (computerChoice == userChoice) {
document.getElementById('winner').innerHTML = 'Noone!'
    } else {
        if (userChoice === 'Rock') {
            if (computerChoice === 'Scissors') {
                document.getElementById('winner').innerHTML = 'User Two'
            } else {
                document.getElementById('winner').innerHTML = 'User One'
            }
        }

        if (userChoice === 'Paper') {
            if (computerChoice === 'Rock') {
                document.getElementById('winner').innerHTML = 'User Two'
            } else {
                document.getElementById('winner').innerHTML = 'User One'
            }
        }

        if (userChoice === 'Scissors') {
            if (computerChoice === 'Rock') {
                document.getElementById('winner').innerHTML = 'User One'

            } else {
                document.getElementById('winner').innerHTML = 'User Two'
            }
        }
    }
}
