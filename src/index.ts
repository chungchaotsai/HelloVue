export default null // Force module mode


// 2d
let l: unknown = 4
if (typeof (l) == 'number') {
    let m = l * 2 // Error TS2571: Object is of type 'unknown'.
    console.log("2d: " + typeof (m))
}
// 原來無判斷式

// 2e symbol
function _2e() {
    let a = Symbol('a')         // symbol
    let b: symbol = Symbol('a') // symbol
    var c = a === b             // boolean
    console.log("2e: " + c);
    //let d = a + 'x'             // Error TS2469: The '+' operator cannot be applied
    // to type 'symbol'.
}
_2e();

// Object 2f
function _2f() {
    let a: {
        b: number
    } = { b: 12 }
    let ccc = a.b
}

// 2g
class Person {
    constructor(
        public firstName: string,   // public is shorthand for
        // this.firstName = firstName
        public lastName: string
    ) { }
}

let c2: {
    firstName: string
    lastName: string
} = {
    firstName: 'john',
    lastName: 'barrowman'
}

let a2: {
    b: number
    c?: string
    [key: number]: boolean
}

a2 = { b: 1 }
a2 = { b: 1, c: undefined }
a2 = { b: 1, c: 'd' }
a2 = { b: 1, 10: true }
a2 = { b: 1, 10: true, 20: false }
//a2 = { 10: true }
// Error TS2741: Property 'b' is missing in type
// '{10: true}'.
//a2 = { b: 1, 33: 'red' }   
// Error TS2741: Type 'string' is not assignable
// to type 'boolean'.

// 2h Index Signatures
let airplaneSeatingAssignments: {
    [seatNumber: string]: string
} = {
    '34D': 'Boris Cherny',
    '34E': 'Bill Gates'
}

let user: {
    readonly firstName: string
} = {
    firstName: 'abby'
}
console.log("2h: " + user.firstName) // string

// 
type Age = number
type PersonT = {
    name: string
    age: Age
}

let age: Age = 55
let driver: PersonT = {
    name: 'James May'
  age: age
}