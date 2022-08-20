//An interface defines the "shape" of data. 
//It contains the general definition and the structure for a complext type
//It defines types to pass data between components in the application
//Interface is a shared contract in the code
interface User
{
    id: number,
    name: string,
    lastName: string,
    password: string
    rol: Rol
    email?: string, // optional parameter using question mark
    resetPassWord(password: string): boolean //you can properties but also functions to an interface
}

interface Rol
{
    id: number,
    rolName: string,
    levelPermission: number
} 


// using interfaces 
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


//Interface vs Types
// - Interfaces represnt the object data structure
// - Type is a alias to represent primitive types and objects like data structure