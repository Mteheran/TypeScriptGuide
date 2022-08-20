//using generics you can use the same function for 2 or more types
function WhatIsThisType<T>(value: T): string {
    
    return typeof(value);
}

//when you call the fcuntion you can specify the type that you want to use
console.log(WhatIsThisType<number>(100)); 
console.log(WhatIsThisType<boolean>(true));
console.log(WhatIsThisType<string>("string value"));

//you can use interfaces in conjuntion with generics 
interface collectionList<T> {
    id: number,
    name: string,
    description: string,
    items: T[] | undefined | null
}

//When you use the previous interface you can specify the type for the collections and items property
var newCollection : collectionList<number> = {
    id: 1,
    name: "New collection",
    description: "This is a new collection",
    items: [10, 20, 30]
}


//You can also extends using generics to include a spefic property by default in the type

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

//when you want to set only some vlaues of the generic class you can use Partial
const simpleCollection = {
    name: 'This is a partial collection',
    items: ["Item1", "Item2"]
}

const partialCollection: Partial<collectionList<string>> = simpleCollection;
