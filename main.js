// Extend

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




// ES6 Classes

// class User {
//     constructor(first, last) {
//         this.firstName = first
//         this.lastName = last
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(amy.getFullName())


// this

// const timer = {
//     name: 'Heropy!',
//     timeout: function () {
//         setTimeout( () => {
//             console.log(this.name)
//         }, 2000)
//     }
// }
// timer.timeout()



// function User(name) {
//     this.name = name
// }
// User.prototype.normal = function () {
//     console.log(this.name)
// }
// User.prototype.arrow = () => {
//     console.log(this.name)
// }
// const heropy = new User('Heropy')
// heropy.normal()
// heropy.arrow()



// const heropy = {
//     name: 'Heropy',
//     normal: function () {
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }
// heropy.normal()
// heropy.arrow()


// class

// function User(first, last) {
//     this.firstName = first
//     this.lastName = last
// }

// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// const heropy = new User('Heropy', 'Part')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(heropy.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())








// Callback

// function timeout(cb) {
//     setTimeout (() => {
//         console.log('TimTim!')
//         cb()
//     }, 3000)
// }
// timeout(() => {
//     console.log('Done!')
// })




// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval()

// const timer = setTimeout(() => {
//     console.log('TimTim!')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     clearTimeout(timer)
// })







// Hoisting

// const a = 7

// double()

// function double() {
//     console.log(a * 2)
// }





// IIFE, Immediately-Invoked Function Expression

// const a = 7

// function double() {
//     console.log(a * 2)
// }
// double();

// (function () {
//     console.log(a * 2)
// })();

// (function () {
//     console.log(a * 2)
// }());





// arrow function
// () => {} vs function () {}

// const double = function (x) {
//     return x * 2
// }
// console.log('double: ', double(7))


// const doubleArrow = (x) => {
//     return x * 2
// }

// const doubleArrowww = (x) => x * 2

// console.log('doubleArrow', doubleArrow(7))






// Variable Scope
// var, let, const

// function scope() {
    
//     if (true) {
//         var a = 123
        
//     }
//     console.log(a)
// }
// scope()


// For statement

// const ulEl = document.querySelector('ul')

// console.log(ulEl)


// for (let i = 0; i < 10; i += 1) {
//    const li = document.createElement('li')
//    li.textContent = `list-${i + 1}`
//    if ((i + 1)% 2 === 0) {
//         li.addEventListener('click', function () {
//         console.log(li.textContent)
//        })
//    }
   
//    ulEl.appendChild(li)
// }




// import random from './getRandom'

// const a = random()

// switch (a) {
//     case 0:
//         console.log('a is 0')
//         break
//     case 2:
//         console.log('a is 2')
//         break
//     case 4:
//         console.log('a is 4')
//         break
//     default:
//         console.log('rest...')
// }



// if (a === 0) {
//     console.log('a is 0')
// } else if (a === 2) {
//     console.log('a is 2')
// }
// else {
//     console.log('rest...')
// }



// ternary operator
// const a = 1 < 2
// console.log(a ? 'true' : 'false')

