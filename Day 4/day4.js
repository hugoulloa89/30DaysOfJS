// Level 1

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// prompt

let yourAge = prompt('Enter you age')
if (yourAge >= 18) {
    console.log('You are old enough to drive')
}else (yourAge < 18) {
    console.log(`You are not allowed to drive, you must wait ${18 - yourAge}`)
}

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/* Enter your age: 30
 You are 5 years older than me.
*/

let yourAge = prompt('Enter your age')
const myAge = 33
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} older than me`)
} else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} older than you`)
} else (yourAge == myAge) {
    console.log('OMG! we are the same age.')
}
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
let a = 4
let b = 3
if (a < b) {
    console.log('a is greater than b')
} else (a > b) {
    console.log('a is less than b')
}


// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
let num = prompt('enter number')
if (num % 2 == 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}


// Level 2

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let grade = prompt('Enter your grade')
switch (true){
    case grade >= 80:
        console.log('Your grade is A')
        break
    case grade >= 70:
        console.log('Your grade is B')
        break
    case grade >= 60:
        console.log('Your grade is C')
        break
    case grade >= 50:
        console.log('Your grade is D')
        break
    case grade >= 0:
        console.log('Your grade is F')
}
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = prompt('Enter a month').toLowerCase()
if (month == 'september' || month == 'october' || month == 'november') {
    console.log(`${month} is in the season Autumn`)
} else if ( month == 'december' || month == 'january' || month == 'february'){
    console.log(`${month} is in the season Winter`)
} else if (month == 'march' || month == 'april' || month == 'may'){
    console.log(`${month} is in the season Spring`)
} else {
    console.log(`${month} is in the season Summer`)
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

let day = prompt('Enter the day of the week').toLowerCase()
if ((day == 'saturday') || (day == 'sunday')) {
    console.log(`${day} is a weekend`)
} else {
    console.log(`${day} is a working day`)
}
// Exercises: Level 3

// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.



// Write a program which tells the number of days in a month, now consider leap year.
if (month == 'february') {
    console.log(`${month} has 28 days or 29 days`)
} else if ('april'||'june'||'september'||'november'){
    console.log(`${month} has 30 days`)
} else {
    console.log(`${month} has 31 days`)
}
