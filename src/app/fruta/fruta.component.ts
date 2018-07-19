import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'    
})

export class FrutaComponent{
    public nombre:string;
    public listado:string;

    constructor(){
        console.log(this.nombre, this.listado);
    }

    // primer método que se va a lanzar tras el constructor
    ngOnInit(){
        this.cambiarNombre("Componente de Fruta");
        this.cambiarListado("Naranjas, manzanas, melocotones");
    }

    cambiarNombre(nombre){
        this.nombre = nombre;
    }

    cambiarListado(listado){
        this.listado = listado;
    }
}