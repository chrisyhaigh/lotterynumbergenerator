
//first creat variables 
const ballNumbers = document.querySelectorAll('.ball');
const generator = document.getElementById('generate');
const duplicate = [];

generator.addEventListener('click', function() {
    let numbers = [];

    // Generate an array of unique random numbers
    while (numbers.length < 6) {
        let randomize = Math.floor(Math.random() * 58) + 1;
        if (!duplicate.includes(randomize)) {
            numbers.push(randomize);
            duplicate.push(randomize);
        }
    }

    //The sort method put numbers in ascending order with 2 arguements//

    numbers.sort((a, b) => a - b);

    // Assign each ball a unique number
    ballNumbers.forEach((ball, index) => ball.innerHTML = numbers[index]);
});


//FUNCTIONS TO.....///

/*if (duplicate balls 1-6 duplicate.push());*/
/* return balls in the ascending order*/

//Create generate Button(event listener onclick)//
//Create IF statement if ball number between then should be certain colour//
//also create function where number cannot be called more than once except BONUS//
//innerText of each element should display different number in ball//

/*const firstBall = randomize();
const secondBall = randomize();
const thirdBall = randomize();
const fourthBall = randomize();
const fifthBall = randomize();
const sixthBall = randomize();
const bonusBall = randomBonus(); */

