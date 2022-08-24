# TypeScript: Ultimate guide for beginners
Guide to learn TypeScript from scratch in short time

TypeScript is a superset of JavaScript that extends the language by adding types and other functionalities.

TypeScript features:

- Created by Microsoft
- Released in 2012
- Supports JavaScript libraries
- Object oriented
- File extension .ts
- Developed to increase quality and has a better architecture in web applications using JavaScript 


TypeScript helps us to:

- Create 'guardrails' for possible wrong changes in the code
- Detect issues easier 
- Prevent issues related to type and format
- Have a better structure in the code
- Have code guidelines in our projects

You can start using TypeScript in the browser: https://www.typescriptlang.org/play

Requirements for this guide:

- Operating system: Windows, Linux, macOS
- Node.JS 16.x >
- Code editor (VS Code, Sublime)

##Project from scratch

To run typescript for the first time with no projects created, you can create a .ts file with a sample code and run the following command to convert this TypeScript file to JavaScript.

```console
npx --package typescript tsc --outDir dist [FileName].ts
```

To create your own project from scratch, first, navigate to an empty folder and create a file with the extension .ts and then execute the following commands:

```console
npm init -y
npm install typescript --save-dev
```

Edit the package.json file and a script section for tsc:

```json
"scripts": {
    "tsc": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"

  },
```

Then, you need to run the following command to create the .tsconfig.json file

```console
run tsc -- --init
```
This file has a configuration by default, but you can change it according to your needs. For more information you can go to: 

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

Finally, Execute the following command to compile your TypeScript files and execute the final JavaScript code:

```console
npm install
npm run tsc
node FileName.js
```


### Execute examples one by one

To learn executing example you can go to:
https://github.com/Mteheran/TypeScriptGuide
and execute the following commands

```console
npm install
npm run tsc
node FileName.js
```

You can follow the guide from the first file, read the comments to understand the context and execute ```npm run tsc``` to generate the JavaScript file and see the changes using ```node [FileName].js```

Now that you know the general concepts related to TypeScript let's start to learn step by step all the features. 


## 1. Variables

We use colon ":" to assign a type to a variable.

```typescript
let number1: number;
let total: number;
```
Typescript can inference the type depending on the value set.

In this case you don't need to specify the type and for this example it will be number.

```typescript
let percentage = 100;
```
You can create constants setting the value after assigning the type

```typescript
const messageResult: string = "The current percentage is:";
```

You cannot assign a new value to a constant. The following line will show an error:

```typescript
const messageResult: string = "The current percentage is:";
messageResult = "";
```

If you try to set a string value to number1 you will get an error and this is a benefit of using TypeScript

```typescript
let number1: number;
number1 = "This message";
```

TypeScript supports boolean type. This value can be true or false

```typescript
let IsADeveloper: boolean;
IsADeveloper = true;
console.log(`"Is the user a developer? " ${IsADeveloper}`);
```

A variable can have multiple types. This concept is called Union in TypeScript. Use the pipe character to define multiple types:

```typescript
let chapterName : string | number;
chapterName = "Number 1";
chapterName = 1;
```

## 2. Additional Types
undefined when the variable will not have a value 

```typescript
let emptyVariable : undefined;
```

A null type for empty values. This is useful when you want to use a variable with a specific type that also can be null.

```typescript
let nullVariable: null;
let description: string | null;
```

Using any you can assign any type of value to the variable 

```typescript
let genericValue: any;
genericValue = 10;
genericValue = "Ten";
```


Use void with a function that doesn't return a value or return undefined

```typescript
function noReturnsValue() : void
{
    console.log("This functions doesn't return a value");

}
```
User never when you that the function never returns a value 

```typescript
function errorFunction(errorMsg: string): never { 

    throw new Error(errorMsg); 

} 
//call error function here
errorFunction("messsage");
```
## 3. Arrays

You can create arrays for a specific type

```typescript
let listOfNumber : number[];

listOfNumber = [0, 1, 5, 8, 10];
```

You can declare the array using generics (another syntax).

```typescript
let listOfNumberGeneric : Array<number> = [0, 1, 5, 8, 10];

let sumOfNumbers = listOfNumber.reduce((p,value)=> p+value);

console.log(`The sum is: ${sumOfNumbers}`);
```

You can create an array using 'any' to support multiples types;

```typescript
let listOfItems : any[];

listOfItems = [0, true, 'Name', 8, 'A text value'];
```


## 4. Enums

You can create an enumeration to use a type that contains some specific values. Create an enumeration as a constant is a good practice


```typescript
const enum dayOfWeek
{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
```

Using enumeration as a type  makes the code easier to understand.

```typescript

let currentDayOfWeek : dayOfWeek;

currentDayOfWeek = dayOfWeek.Saturday;

console.log(`The current day is: ${currentDayOfWeek} `);
```

Enums are very useful to validate a value in conditions. You can easily identify what the value means:

```typescript
if(currentDayOfWeek === dayOfWeek.Saturday || currentDayOfWeek == dayOfWeek.Sunday)
{
    console.log(`it's weekend!!!!`); 
}
```

## 5. Tuples

You can declare a new variable composed for 2 o more values (this is a tuple).

```typescript
const fullName : [string, string] = ["Miguel", "Teheran"];
```
You can use different types in a tuple.

```typescript
//product name, cost and quantity example:
const product : [string, number, number] = ["Tomato", 1, 50];
```
You can create an array of tuples 

```typescript
var employee: [number, string][];

employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
```

You can access properties in the tuple using the position 

```typescript
const fullName : [string, string] = ["Miguel", "Teheran"];

console.log(fullName[0]); //prints Miguel
console.log(fullName[1]); //prints Teheran
```
## 6. Functions
You can specify the type of a parameter in a function

```typescript
function  printDoubleNumber(number: number) : void
{
    console.log(number * 1);
} 
```
You can use it with a function as a expression

```typescript
const printDoubleNumberExpression = function  printDoubleNumber(number: number) : void
{
    console.log(number * 1);
} 
```

You can also use arrow function 

```typescript
const printDoubleNumberArrow = (number: number) : void =>
{
    console.log(number * 1);
} 
```

You can define a specific type to return in a function

```typescript
const plusNumbers = (number1: number, number2: number) : number =>
{
   return number1 + number2;
} 
```

TypeScript supports optional parameter using question mark

```typescript
const concactStrings = (title: string, name?: string)  =>
{
  console.log(`${title} ${name}`);
} 
```

You can specify a default value for a parameter by setting the value in the definition

```typescript
const calculateTax = (productPrice: number, taxPercentage: number = 0.16): number  =>
{
  return productPrice * taxPercentage;
} 
```

Using rest parameter to receive more parameters with a default type

```typescript

const setConfiguration = (IsActivated:boolean, ...options: Array<string>): void  =>
{
  console.log(`Configuration is activated ${IsActivated}`)
} 
```


## 7. Types

In TypeScript you can create types by adding properties names and types. Type is a complex type composed of multiple properties. Using the question mark you set undefined as a possible (this means optional value)

```typescript 
type Person =
{
    id: number,
    name: string,
    lastName: string,
    phone?: string, //with the question mark you set undefined as a possible value  
}

var newPerson : Person = {id : 1, name: "Miguel", lastName: "Mendez"} ;
newPerson.lastName = "Teheran";

console.log(`I am ${newPerson.name} ${newPerson.lastName}`);
```

When you are using a type in a function, you can use destructuring to get the value for specific properties:

```typescript
const printFullName = ({name, lastName}: Person) =>
{

    console.log(`My fullname is ${name} ${lastName}`);

}
printFullName(newPerson);
```

## 8. Classes

A class is a template with code used to create instances with specific data. A class can contain functions, properties, a constructor and data.

```typescript

class SmarPhone {

    color: string
    brand: SmartPhoneBrand
    price:number    

    constructor() {
        //default values using constructor
        this.color = "white";
        this.brand = SmartPhoneBrand.Other;
        this.price = 0;
    }

   //you can initialize and create the properties directly in the constructor
    //constructor(public color: string, public brand: SmartPhoneBrand, public price: number) {
    //    this.color = "white";
    //    this.brand = SmartPhoneBrand.Other;
    //    this.price = 0;
    //}

    setPrice(smartPhonePrice: number) : void
    {
        this.price = smartPhonePrice;
    }
}

//example of a enumeration used in the class
const enum SmartPhoneBrand {
    Apple,
    Xiaomi,
    Sansumg,
    Motorola,
    Other
}

var mySmartPhone  = new SmarPhone();
mySmartPhone.brand = SmartPhoneBrand.Apple;

console.log(`my cellphone is ${mySmartPhone.brand} ${mySmartPhone.color}
nad the price is ${mySmartPhone.price}`);

```

You can extend from a class or abstract class. An abstract class cannot be implemented.

```typescript
abstract class Card {
    //creating and initializing the properties using the constructor 
    constructor(public cardNumber: number, public owner: string) {}
}
//you need to use super to pass the parameters to the parent class
class CreditCard extends Card { 

    constructor(public balance: number, cardNumber: number,  owner: string) {
        super(cardNumber, owner);
    }
}
var masterCard = new CreditCard(1000, 11225533645, "Jhon Doe");
```

## 9. Generics
Using generics you can use the same function for 2 or more types

```typescript
function WhatIsThisType<T>(value: T): string {
    return typeof(value);
}

//when you call the function you can specify the type that you want to use
console.log(WhatIsThisType<number>(100)); 
console.log(WhatIsThisType<boolean>(true));
console.log(WhatIsThisType<string>("string value"));
```
You can use interfaces in conjunction with generics:

```typescript
interface collectionList<T> {
    id: number,
    name: string,
    description: string,
    items: T[] | undefined | null
}
```

When you use the previous interface, you can specify the type for the collections and items property

```typescript
var newCollection : collectionList<number> = {
    id: 1,
    name: "New collection",
    description: "This is a new collection",
    items: [10, 20, 30]
}
```

You can also extend using generics to include a specific property by default in the type

```typescript
interface HasId
{
    id:number;
}

class Item implements HasId {
    constructor(public id:number) {}
}

class GenericModel<T extends HasId> {
    items: T[] | undefined

    constructor(public name:string) {}

    getItembyId(id:number) {
        return this.items?.find(p=> p.id === id);
    }
}
```

When you want to set only some values of the generic class you can use Partial

```typescript

const simpleCollection = {
    name: 'This is a partial collection',
    items: ["Item1", "Item2"]
}

const partialCollection: Partial<collectionList<string>> = simpleCollection;
```

## 10. Interfaces

An interface defines the "shape" of data. It contains the general definition and the structure of a complex type. It defines types of data to pass between components in the application.Interface is a shared contract in the code

```typescript
interface User
{
    id: number,
    name: string,
    lastName: string,
    password: string
    rol: Rol
    email?: string, // optional parameter using question mark

    resetPassWord(password: string): boolean //you can properties but also functions to an interface (without implementation)
}

interface Rol
{
    id: number,
    rolName: string,
    levelPermission: number
}
```

You can use interfaces to create objects that will follow the format including functions and properties:

```typescript
let newRol : Rol = 
{
    id: 1,
    rolName: "Admin",
    levelPermission: 0
}

let newUser : User = 
{
    id: 1,
    name: "Miguel",
    lastName: "Teheran",
    password: "****",
    rol: newRol,
    resetPassWord: function (password: string): boolean {
        this.password = password;
        return true;
    }
}
```

####Interface vs Type

- Interfaces represent the object data structure

- Type is an alias to represent primitive types and objects like data structure

- Both are fine, but interfaces are more common and more strict 

- Type could have a primitive value interface not: 


```typescript
type Person = string |
{   
    id: number,
    name: string,
    lastName: string,
    phone?: string, //with the question mark you set undefined as a possible value
}
```