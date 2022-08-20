//you can specify the type of a parameter in a function
function  printDoubleNumber(number: number) : void
{
    console.log(number * 1);
} 

//you can use it with a function as a expression
const printDoubleNumberExpression = function  printDoubleNumber(number: number) : void
{
    console.log(number * 1);
} 
//you can also use arrow function 
const printDoubleNumberArrow = (number: number) : void =>
{
    console.log(number * 1);
} 

//you can return a specifict type of value
const plusNumbers = (number1: number, number2: number) : number =>
{
   return number1 + number2;
} 

//you can specify a optional parameter using question mark
const contacStrings = (title: string, name?: string)  =>
{
  console.log(`${title} ${name}`);
} 

//you can specify a default value for a parameter setting the value in the definition
const calculateTax = (productPrice: number, taxPercentage: number = 0.16): number  =>
{
  return productPrice * taxPercentage;
} 

//you rest parameter to recieve more parameters with a default type
const setConfiguration = (IsActivated:boolean, ...options: Array<string>): void  =>
{
  console.log(`Configuration is activated ${IsActivated}`)
} 

//calling functions
printDoubleNumber(5);
printDoubleNumberExpression(5);
printDoubleNumberArrow(5);
contacStrings('only title here');
calculateTax(1200);
console.log(plusNumbers(5, 4));