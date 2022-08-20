//add a new property to Person Type and set a value then print in the cosole.
type Person =
{
    id: number
    name: string
    lastName: string
    phone?: string //with the question mark you set undefined as a possible value   
}

var newPerson : Person = {id : 1, name: "Miguel", lastName: "Mendez"} ;
newPerson.lastName = "Teheran";

console.log(`I am ${newPerson.name} ${newPerson.lastName}`);