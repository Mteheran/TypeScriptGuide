// You can create arrays for a specific type
let listOfNumber : number[];
listOfNumber = [0, 1, 5, 8, 10];

// You can declare the array using generics
let listOfNumberGeneric : Array<number> = [0, 1, 5, 8, 10];

let sumOfNumbers = listOfNumber.reduce((p,value)=> p+value);
console.log(`The sum is: ${sumOfNumbers}`);

//You can create an array using 'any' to support multiples files;
let listOfItems : any[];
listOfItems = [0, true, 'Name', 8, 'A text value'];