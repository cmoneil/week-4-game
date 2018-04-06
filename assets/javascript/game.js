$(document).ready(function () {
    // Your code here...
    var yourNumber = 0;
    var yourScore = 0;
    var crystalMin = 1;
    var crystalMax = 12;
    var blueCrystal = [];
    var yellowCrystal = [];
    var tealCrystal = [];
    var purpleCrystal = [];
    var randomNumber = [];
    var minNumber = 19;
    var maxNumber = 120;
    var winCounter = 0;
    var lossCounter = 0;
    var crystalValue = 0;

    
    function startGame() {
        yourScore = 0;
        crystalValue = 0;
        randomNumber = randomNumberFromRange(minNumber, maxNumber);
        blueCrystal = randomBlueCrystalNumber(crystalMin, crystalMax);
        yellowCrystal = randomYellowCrystalNumber(crystalMin, crystalMax);
        tealCrystal = randomTealCrystalNumber(crystalMin, crystalMax);
        purpleCrystal = randomPurpleCrystalNumber(crystalMin, crystalMax);

        function randomNumberFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function randomBlueCrystalNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function randomYellowCrystalNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function randomTealCrystalNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function randomPurpleCrystalNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        

        console.log(randomNumber);
        console.log(blueCrystal);
        console.log(yellowCrystal);
        console.log(tealCrystal);
        console.log(purpleCrystal);



        $('#yourNumber').html(randomNumber);
        $('#yourScore').html(yourScore);
        $('#crystalValue').html(crystalValue);
    }

    // $('.crystal').click(function () {
    //   if (blueCrystal) {
    // yourScore = yourScore + blueCrystal;

    //}
    // if (yellowCrystal) {
    //  yourScore = yourScore + yellowCrystal;

    //}

    //$('.yourScore').html(yourScore);
    // return;
    //})

    function assignButtons() {

        //if (yourScore < yourNumber){
        $('.blueCrystal').click(function () {
            yourScore = parseInt(yourScore + blueCrystal);
            console.log(yourScore);
            $('#yourScore').html(yourScore);
            //blueCrystal = crystalValue;
            $('#crystalValue').html(blueCrystal)
        })

        $('.yellowCrystal').click(function () {
            yourScore = parseInt(yourScore + yellowCrystal);
            console.log(yourScore);
            $('#yourScore').html(yourScore);
            $('#crystalValue').html(yellowCrystal)
        })

        $('.tealCrystal').click(function () {
            yourScore = parseInt(yourScore + tealCrystal);
            console.log(yourScore);
            $('#yourScore').html(yourScore);
            $('#crystalValue').html(tealCrystal)

        })

        $('.purpleCrystal').click(function () {
            yourScore = parseInt(yourScore + purpleCrystal);
            console.log(yourScore);
            $('#yourScore').html(yourScore);
            $('#crystalValue').html(purpleCrystal)
        })
        

    }


    function roundComplete() {
        console.log('Your score: ' + yourScore + '| Your number: ' + randomNumber);

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

    //$('crystal').click(function () {}