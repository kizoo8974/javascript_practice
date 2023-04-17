import _ from 'lodash'
/*
import checkType from './getType'
import { getRandom, user as danny } from './getRandom'
import * as R from './getRandom'
*/

// lodash features

const usersA = [
    { userId: '1', name: 'Heropy'},
    { userId: '2', name: 'Neo' }
]
const usersB = [
    { userId: '1', name: 'Heropy' },
    { userUd: '3', name: 'Amy' }
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)


const users = [
    { userId: '1', name: 'Heropy' },
    { userId: '2', name: 'Neo' },
    { userId: '3', name: 'Amy' },
    { userId: '4', name: 'Evan' },
    { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy'})
const foundUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users,  { name: 'Lewis' })
console.log(users)

// import, export

/*
console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
console.log(getRandom(), getRandom())
console.log(danny)

console.log(R)
*/



// Shallow copy, Deep copy

/*
const user = {
    name: 'joon kim',
    age: 85,
    emails: ['kizoo8974@gmail.com']
}
// const copyUser = Object.assign({}, user)
// const copyUser = {...user}
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('kizoo@zillings.com')
console.log(user.emails ===copyUser.emails)

*/






// .push() .unshift() .reverse() .splice()

/*
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

numbers.splice(2, 1)
console.log(numbers)

fruits.splice(2, 0, 'Orange')
console.log(fruits)
*/


// .includes()
/*
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.includes(3)
console.log(a)

const b = fruits.includes('Heropy')
console.log(b)
*/


// .find() .findIndex()

/*
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruits.find(fruit => /^B/.test(fruit))
console.log(a)

const b = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(b)
*/


// .filter()
/*
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => number < 3)
console.log(a)

const b = numbers.filter(number => number < 3)
console.log(b)
*/







// Extend

/*
class Vehicle {
    constructor(name, wheel) {
        this.name = name
        this.wheel = wheel
    }
}
const myVehicle = new Vehicle('Car','4')
console.log(myVehicle)

class Bicycle extends Vehicle {
    constructor(name, wheel) {
        super(name, wheel)
    }
}
const myBicycle = new Bicycle('mountain',2)
const dogBicycle = new Bicycle('dog', 2)
console.log(myBicycle)
console.log(dogBicycle)

class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name, wheel)
        this.license = license
    }
}
const myCar = new Car('F50', 4, true)
const dogCar = new Car('Porche', 4, false)
console.log(myCar)
console.log(dogCar)
*/



// ES6 Classes

/*
class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(amy.getFullName())
*/



// this

/*
const timer = {
    name: 'Heropy!',
    timeout: function () {
        setTimeout( () => {
            console.log(this.name)
        }, 2000)
    }
}
timer.timeout()
*/

/*
function User(name) {
    this.name = name
}
User.prototype.normal = function () {
    console.log(this.name)
}
User.prototype.arrow = () => {
    console.log(this.name)
}
const heropy = new User('Heropy')
heropy.normal()
heropy.arrow()



const heropy = {
    name: 'Heropy',
    normal: function () {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}
heropy.normal()
heropy.arrow()
*/

// class
/*
function User(first, last) {
    this.firstName = first
    this.lastName = last
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy', 'Part')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())
*/







// Callback  ex) setTimeout, addEventListner...
/*
function timeout(cb) {
    setTimeout (() => {
        console.log('TimTim!')
        cb()
    }, 3000)
}
timeout(() => {
    console.log('Done!')
})
*/



// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval()

/*
const timer = setTimeout(() => {
    console.log('TimTim!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    clearTimeout(timer)
})
*/






// Hoisting

// const a = 7

// double()

// function double() {
//     console.log(a * 2)
// }





// IIFE, Immediately-Invoked Function Expression

/*
const a = 7

function double() {
    console.log(a * 2)
}
double();

(function () {
    console.log(a * 2)
})();

(function () {
    console.log(a * 2)
}());
*/




// arrow function
// () => {} vs function () {}

/*
const double = function (x) {
    return x * 2
}
console.log('double: ', double(7))


const doubleArrow = (x) => {
    return x * 2
}

const doubleArrowww = (x) => x * 2

console.log('doubleArrow', doubleArrow(7))
*/





// Variable Scope
// var, let, const

/*
function scope() {
    
    if (true) {
        var a = 123
        
    }
    console.log(a)
}
scope()
*/

// For statement

/*
const ulEl = document.querySelector('ul')

console.log(ulEl)


for (let i = 0; i < 10; i += 1) {
   const li = document.createElement('li')
   li.textContent = `list-${i + 1}`
   if ((i + 1)% 2 === 0) {
        li.addEventListener('click', function () {
        console.log(li.textContent)
       })
   }
   
   ulEl.appendChild(li)
}
*/



// import random from './getRandom'

/*
const a = random()

switch (a) {
    case 0:
        console.log('a is 0')
        break
    case 2:
        console.log('a is 2')
        break
    case 4:
        console.log('a is 4')
        break
    default:
        console.log('rest...')
}
*/

/*
if (a === 0) {
    console.log('a is 0')
} else if (a === 2) {
    console.log('a is 2')
}
else {
    console.log('rest...')
}
*/


// ternary operator

/*
const a = 1 < 2
console.log(a ? 'true' : 'false')
*/
