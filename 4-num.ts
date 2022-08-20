//you can create a enum to use a type that contains some specific values
//create a enum as a const is a good practice
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

//using the enum as a type
let currentDayOfWeek : dayOfWeek;
currentDayOfWeek = dayOfWeek.Saturday;

console.log(`The current day is: ${currentDayOfWeek} `); 

//enums are very useful to validate a value in coditions
if(currentDayOfWeek === dayOfWeek.Saturday || currentDayOfWeek == dayOfWeek.Sunday)
{
    console.log(`it's weekend!!!!`); 
}