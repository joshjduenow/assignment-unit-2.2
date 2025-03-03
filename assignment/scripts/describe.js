// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We have a variable called name and it is given the value of Dane.
// We the check if the name is equal to the name Mary. If it is equal to Mary,
// we would console log Hi, Mary! We have an Else set that if the name is not Mary
//we console log How do you do? So, because the name does not equal Mary, we console log How do you do?

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We have a variable of secret and a variable of code. Code having a value of 123. In our first if, we check if the code is exactly equal to 123.
// Since it is, secret would console log as super and the code, 123, would multiply by 2. Then, we look at the second if and see that if the code is greater
// than 250 it would log at duper. Since this is not true, it would not log duper. So, we console log secret and see super 246 in the log.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We have isStudent variable with a value of true, and age variable with the value of 34 and a zip variable with a value of 55407.
// We have an if statement that stating that if isStudent is true and zip is greater than 80000 'You're a student on the West Coast!' is logged. That's not
// true, so it won't be logged. We have an else if stating that if isStudent is false OR the age is less than 30 'What are your hobbies will be logged. That
// is also not true. We have another else if that isStudent true 'Welcome to Prime!' will be logged, which is what will be seen in the console. The else will
// of 'How about the weather?' will not show in the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/* // change colorOne to 'blue' and colorTwo to 'red' per the instructions.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// colorTwo should also be set to 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/ //we should console.log('purple');

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// our if should show && instead of the || for it to be true.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/* // minAge shouldn't be a const as it would not allow the code to run properly.
let age = 21;
const minAge = 21;
// need a space after the if. Also, the console.logs need to be swapped if we want the correct log in the console per the instructions.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

