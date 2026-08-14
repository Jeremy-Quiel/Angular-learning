interface Persona {
    nombre: string;
    edad: number;
    email?: string; // Optional attribute

    saludar(): string; // Declarate return type of function
}

// Instance
let p: Persona = {
    nombre: "Jeremy",
    edad: 20,
    saludar() {
        return "hola " + this.nombre
    }
    
}

// Access
console.log(p.nombre)
console.log(p.edad)
console.log(p.email)
console.log(p.saludar())

