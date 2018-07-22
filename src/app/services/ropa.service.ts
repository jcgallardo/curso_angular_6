import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{
    public nombre_prenda = 'Pantalones vaqueros';
    public coleccion_ropa = ['pantalones blancos', 'camiseta roja']

    prueba(nombre_prenda){
        this.nombre_prenda = nombre_prenda;
        return this.nombre_prenda;
    }

    add(nombre_prenda:string):Array<String>{
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    remove(index:number):Array<String>{
        this.coleccion_ropa.splice(index,1);
        return this.getRopa();
    }

    getRopa():Array<String>{
        return this.coleccion_ropa;
    }
}