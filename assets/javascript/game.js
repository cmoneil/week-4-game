$(document).ready(function () {
    
    let yourScore = 0;
    const crystalMin = 1;
    const crystalMax = 12;
    let blueCrystal;
    let yellowCrystal;
    let tealCrystal;
    let purpleCrystal;
    let randomNumber;
    const minNumber = 19;
    const maxNumber = 120;
    let winCounter = 0;
    let lossCounter = 0;
    let crystalValue = 0;

    //sets random number to match
    const randomNumberFromRange = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);
    
    //sets random number for each crystal
    const randomCrystalNumber = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + min);
    
    
    //sets initial state of game
    function startGame() {
        yourScore = 0;
        crystalValue = 0;
        randomNumber = randomNumberFromRange(minNumber, maxNumber);
        blueCrystal = randomCrystalNumber(crystalMin, crystalMax);
        yellowCrystal = randomCrystalNumber(crystalMin, crystalMax);
        tealCrystal = randomCrystalNumber(crystalMin, crystalMax);
        purpleCrystal = randomCrystalNumber(crystalMin, crystalMax);

        $('#yourNumber').html(randomNumber);
        $('#yourScore').html(yourScore);
        $('#crystalValue').html(crystalValue);
        
    }

    //assigns functionality to each button
    function assignButtons() {

        $('.blueCrystal').click(function () {
            yourScore = parseInt(yourScore + blueCrystal);
            $('#yourScore').html(yourScore);
            $('#crystalValue').html(blueCrystal);
        });

        $('.yellowCrystal').click(function () {
            yourScore = parseInt(yourScore + yellowCrystal);
            $('#yourScore').html(yourScore);
            $('#crystalValue').html(yellowCrystal);
        });

        $('.tealCrystal').click(function () {
            yourScore = parseInt(yourScore + tealCrystal);
            $('#yourScore').html(yourScore);
            $('#crystalValue').html(tealCrystal);
        });

        $('.purpleCrystal').click(function () {
            yourScore = parseInt(yourScore + purpleCrystal);
            $('#yourScore').html(yourScore);
            $('#crystalValue').html(purpleCrystal);
        });
        

    }

    //checks win conditions
    function roundComplete() {

        if( yourScore === randomNumber) {
            winCounter++;
            alert('You win!');
            $('#winCounter').html(winCounter);
            startGame();
        }
        else if (yourScore > randomNumber) {
            lossCounter++;
            alert('You lose!');
            $('#lossCounter').html(lossCounter);
            startGame();
        }
    }
    
    startGame();
    assignButtons();
    $('.crystal').click(function () {
        roundComplete();

    })
})