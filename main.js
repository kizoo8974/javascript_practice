// Hoisting

const a = 7

double()

function double() {
    console.log(a * 2)
}





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

