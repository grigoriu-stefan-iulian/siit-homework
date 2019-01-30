
//let suma = ([a, b, c]) => a + b + c

// let sum = []
// let mySum = 0
// let suma2 = (sum) => {
// for (let i = 1; i < sum.length; i++) {
//  mySum = mySum + sum[i]
// }
// return mySum
// }

// let x = {a: 5, b: 7}
// let interchangeProps = (x) => {
// let galeataGoala = 0
// galeataGoala = x.a
// x.a = x.b
// x.b = galeataGoala
// }

//let min = (...array) =>console.log(array)

// let minTwo = (array) => {
//     let max = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) {
//             max = array[i]
//         }
//     }
//     return max
// }


// let palindrom = (string) => {
//     let newArr = ''
//     for (let i = string.length - 1; i >= 0; i--) {
//         newArr += string[i]
//     }
//     return string === newArr 
// }

// let palindrom = (string) => {
//     let i = 0, j= string.length - 1;
//     while (i !== j ) {
//        if (string[i] !== string[j]) return false
//        i++; j--;
//     }
//     return true 
// }

// let palindrom = (string) => {

//     for (let i = 0, j= string.length - 1; i !== j; i++, j-- ) {
//        if (string[i] !== string[j]) return false
//     }
//     return true 
// }


/*
const firstAppearance = (array, number) =>  array.indexOf(number)

console.log(firstAppearance([1,2,3,1], 3))
*/

/*
const isPrime = (number) => {
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            return false
        }
    }
}
*/

/*
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false
        }
    }
    return value > 1
}
*/

/*
const getPrimes = (array) => {
    let myArray = []
    array.forEach((number) => {
        for (let i = 2; i < Math.sqrt(number) + 1; i++) {

            if (number % i === 0) {
                return
            }
        }
        return number > 1 ? myArray.push(number) : myArray
    })
    return console.log(myArray)
}
console.log(getPrimes([31,1, 2, 4, 5, 7, 9, 11, 12, 16, 1]))

*/

// Intercalate
/*
const intercalate = (array1, array2) => {
    let myArray = []
    if (array1.length !== array2.length) {
        throw new Error(console.log('The arrays do not have the same length'))
    }
    for (let i = 0; i < array1.length; i++) {
        myArray.push(array1[i], array2[i])
    }
    return myArray
}

console.log(intercalate([5, 3, 6], [7, 4, 9]))
*/


// Fibonnachi

const fibonacci = (number) => {
    let fibonacciArray = [1,2]
    for(let i = 2; i < number; i++) {
        fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1])
    }
    return fibonacciArray
}

console.log(`Fibonacci exercise: ${fibonacci(10)}`)
