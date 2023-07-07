/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum)

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum)

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); also valid
const addTwoNumbers2 = (a, b) => a + b;

let sum2= addTwoNumbers2(5, 6);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello World!');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());

// Challenge - Create a function using the arrow syntax
// that should return the average marks of a subject.

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

// Declare a variable named averagePoints using the keyword const.
// Assign it an arrow function, which should take two parameters named: arr and subject.
const averagePoints = (arr, subject) => {
    let subjectResults = 0;
    let resultsCount = 0;

    // Loop through the array that is passed in.
    for (let i in arr) {
        // check if the subject passed in is in said student's results object
        const student = arr[i];
        const studentResults = student["results"];

        // if it is, add it to a cumulative total of all results for that subject
        if (subject in studentResults) {
            let hasSubject = studentResults[subject];
        subjectResults += parseInt(hasSubject);
        resultsCount += 1;
        }
    }
    // return the average result for the subject
    return subjectResults / resultsCount;
}

// Declare a variable named: averageMarks using the keyword let.
// Assign it the return value from calling the function averagePoints,
// and passing it the students array and a subject string
let averageMarks = averagePoints(students, 'maths');
// Log out the variable averageMarks to see its value
console.log(averageMarks);