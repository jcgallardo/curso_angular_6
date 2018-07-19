export class Empleado{
    /*public nombre:string;
    public edad:number;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }*/

    // Esto hace lo mismo a lo anterior
    constructor(
        public nombre:string, 
        public edad:number,
        public cargo:string,
        public contratado:boolean
    ){}
}