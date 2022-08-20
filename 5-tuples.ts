//You can declare a new variablecomposed for 2 o more values
const fullName : [string, string] = ["Miguel", "Teheran"];

//you can use diferents types
//product name, cost and quantity example:
const product : [string, number, number] = ["Tomato", 1, 50];

//You can create an array of tuples
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

//You can acces to the properties in the tuple in this way
console.log(fullName[0]);
console.log(fullName[1]);