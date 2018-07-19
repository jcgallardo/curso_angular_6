import { Component } from '@angular/core';
import { Empleado } from './empleado';


@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public title = "Componente Empleado";
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;

    constructor(){
        this.trabajadores = [
            new Empleado("JuanCarlos 1", 30, "Software Engineer 1", false),
            new Empleado("JuanCarlos 2", 30, "Software Engineer 2", false),
            new Empleado("JuanCarlos 3", 35, "Software Engineer 3", true)
        ];

        this.empleado = new Empleado("JuanCarlos", 25, "Software Engineer", true);
        this.trabajador_externo = true;
    }

    ngOnInit(){
        // ajax initialize
        console.log(this.empleado);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
}