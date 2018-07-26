import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo = "Página principal";
    public nombre = "Juan Carlos";
    public listado_ropa:Array<String>;
    public prenda: String;
    public fecha;

    constructor(
        private _ropaService: RopaService,
    ){
        this.fecha = new Date();
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
    }

    addPrenda(){
        this.listado_ropa.push(this.prenda);
        this.prenda = null;
    }

    removePrenda(index:number){
        this._ropaService.remove(index);
    }
}