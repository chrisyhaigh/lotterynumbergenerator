const randomize = () => Math.floor(Math.random() * 58) + 1;
const randomBonus = () => Math.floor(Math.random()  * 58) + 1;
const duplicate = [];

const firstBall = randomize();
const secondBall = randomize();
const thirdBall = randomize();
const fourthBall = randomize();
const fifthBall = randomize();
const sixthBall = randomize();
const bonusBall = randomBonus();

//FUNCTIONS TO.....///

/*if (duplicate balls 1-6 duplicate.push());*/
/* return balls in the ascending order*/

//Create generate Button//
//Create IF statement if ball number between then should be certain colour//
//also create function where number cannot be called more than once except BONUS//
//innerText of each element should display different number in ball//

console.log(`The firstball out is ${firstBall}`);
console.log(`The second ball out is ${secondBall}`);
console.log(`The third ball out is ${thirdBall}`);
console.log(`The fourth ball out is ${fourthBall}`);
console.log(`The fifth ball out is ${fifthBall}`);
console.log(`The final ball out is ${sixthBall}`);
console.log(`And the bonus ball is ${bonusBall}`);
