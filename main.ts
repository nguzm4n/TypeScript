// Tipos


 let hola = "hola"
 let name = 2

 //any es decirle a typescript que ignore el tipado
 let a: any = "as"
 
 //unknown no sabemos cual es el tipo
 let b: unknown = "asd"


 //FUNCIONES

// function saludar(number:string) {
//     console.log(`Hola ${number}`)
//  }

//  saludar("Guts")

function saludar({name, age}: {name: string, age: number}): number {
    console.log(`Hola ${name}`)
    return age
 }

 saludar({name: "Guts", age: 2})

 //OBJETOS

