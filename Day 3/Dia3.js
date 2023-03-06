// Javascript

// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// Declaring different variables of different data types
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let age = 25
let isMarried = true
let year = now.getFullYear()


console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// Check if type of '10' is equal to 10
console.log('10' === 10)

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

// Boolean value is either true or false.
console.log(undefined == null)

// Write three JavaScript statement which provide truthy value.
let isMorning = true
let isDayTime = true
let valueCloth = 1200

// Write three JavaScript statement which provide falsy value.
let isNightime = false
let isFalsy = NaN
let isRight = undefined

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3) // True
console.log(4 >= 3) // True
console.log(4 < 3) // false
console.log(4 <= 3) // false 
console.log(4 == 4) // True
console.log(4 === 4) // True
console.log(4 != 4) // false
console.log(4 !== 4) // false 
console.log(4 != '4') // false 
console.log(4 == '4') // True
console.log(4 === '4') // false 

// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length != 'jargon'.length) 

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12)  // True
console.log(4 > 3 && 10 > 12) // False
console.log(4 > 3 || 10 < 12) // True
console.log(4 > 3 || 10 > 12) // True
console.log(!(4 > 3)) //False
console.log(!(4 < 3)) // True
console.log(!(false)) // True
console.log(!(4 > 3 && 10 < 12)) // False
console.log(!(4 > 3 && 10 > 12)) // True
console.log(!(4 === '4')) // True

// There is no 'on' in both dragon and python 
console.log(!('dragon'.includes('on') && 'python'.includes('on')))

// Use the Date object to do the following activities

// What is the year today?
const thisYear = now.getFullYear()
// What is the month today as a number?
const thisMonth = now.getMonth()
// What is the date today?
const date = now.getDay()
// What is the day today as a number?
const day = now.getDate
// What is the hours now?
const hours = now.getHours()
// What is the minutes now?
const minutes = now.getMinutes()
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
const seconds = now.getTime()

// Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
Enter base: 20
Enter height: 10
The area of the triangle is 100
*/
let base = prompt('Enter base lenght')
let height = prompt('Enter height lenght')
const area = 0.5
console.log(`${area * base * height} is the area of the triangle`)



// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
let sideA = prompt('Enter side A lenght')
let sideB = prompt('Enter side B lenght')
let sideC = prompt('Enter side C lenght')



// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

/*
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/

// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.


// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.

// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm


// Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05