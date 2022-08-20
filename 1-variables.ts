//We use ":" to assing a type
let number1: number;
let total: number;

//Typescript can inference the type depending on the value set.
//In this case you don't need to specify the type
let percentage = 100;


//you can create constant setting the value after assign the type
const messageResult: string = "The current percentage is:";

//you cannot assign a new value to a constant. uncomment and see the the error in the following line:
//messageResult = ""


//Set a value to the variable
number1 = 0.263;

total = number1 * percentage;

//If you try to set a string value to number1 you will get and error and this is a benefit of usign TypeScript
//Uncomment the code and try
//number1 = "This message";

console.log(`${messageResult} ${total}`);

//TypeScript supports boolean type. This value can be true or false
let IsADeveloper: boolean;
IsADeveloper = true;
console.log(`"Is the user a developer? " ${IsADeveloper}`);

//A variable can have multiples types 
let chapterName : string | number;
chapterName = "Number 1";
chapterName = 1;
console.log(chapterName);