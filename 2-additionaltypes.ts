let emptyVariable : undefined;

//A null value
//This is useful when you want to use a variable with a specific type that also can be null
let nullVariable: null;
let description: string | null;

//Using any you can assign any type of value to the variable 
let genericValue: any;
genericValue = 10;
genericValue = "Ten";

//void is used with a function doesn't return a value or return undefined 
function noReturnsValu() : void
{
    console.log("This functions doesn't return a value");
}

//used when you that the function never returns a value 
function errorFunction(errorMsg: string): never { 
    throw new Error(errorMsg); 
} 

//call error function here
//errorFunction("messsage");