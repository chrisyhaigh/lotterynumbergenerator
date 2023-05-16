
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

