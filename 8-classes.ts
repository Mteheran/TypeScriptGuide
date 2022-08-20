//A class is a template with code use to create instances with specific data
//A class can contains functions, properties, a contructor abd data

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

//You can extends from a class or abstract class 
//an Abstract class cannot be implemented
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