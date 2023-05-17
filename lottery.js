
//first creat variables 
const ballNumbers = document.querySelectorAll('.ball');
const generator = document.getElementById('generate');
const clearBtn = document.getElementById('clear-button');
const duplicate = [];

//created function to match the ball colors and font-color depending on ball Number//
function setBallColor (ball, number) {
    if (number >= 1 && number <= 9) {
        ball.style.backgroundColor = "white";
        ball.style.color = "black";
    } else if (number >= 10 && number <= 19) {
        ball.style.backgroundColor = "blue";
        ball.style.color = "white";
    } else if (number >= 20 && number <= 29) {
        ball.style.backgroundColor = "magenta";
        ball.style.color = "white";
    } else if (number >= 30 && number <= 39) {
        ball.style.backgroundColor = "green";
        ball.style.color = "white"; 
    } else if (number >= 40 && number <= 49) {
        ball.style.backgroundColor = "yellow";
        ball.style.color = "black";
    } else if (number >= 50 && number <= 59) {
        ball.style.backgroundColor = "purple";
        ball.style.color = "white";
    }
};


generator.addEventListener('click', function() {
    const numbers = [];

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
    // For loop to assign ball a number and set the color from function created//
    ballNumbers.forEach((ball, index) => {
        ball.innerHTML = numbers[index];
        setBallColor(ball, numbers[index]);
    });
});

//This resets all the balls to empty strings and resets the duplicate array back to 0//
//Also resets ball background to black//
clearBtn.addEventListener('click', function() {
    ballNumbers.forEach((ball) => {
        ball.innerHTML = '';
        ball.style.backgroundColor = "black";
    });
    duplicate.length = 0;
});


