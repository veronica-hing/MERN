const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
const [, , thirdcar] = cars
//Predict the output
console.log(randomCar) // 'Tesla' since tesla is 0th index
console.log(otherRandomCar) // 'Mercedes since mercedes in 1st index

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); //error since name isn't defined. it would need to be employee.name
console.log(otherName); //'Elon' since we take the name field and store it in otherName

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //'12345' since we defined it
console.log(hashedPassword); //undefined since person has no defined property password

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; //2
//Predict the output
console.log(first == second); //false
console.log(first == third); //true





