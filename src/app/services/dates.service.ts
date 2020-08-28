import { importType } from "@angular/compiler/src/output/output_ast";

import { Injectable } from '@angular/core';

@Injectable()
export class DatesService {

    private dias: any[] = [
        
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        

    ];

    private meses: any[] = [

        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',

    ];



    constructor() {
    }

    getDias() {
        return this.dias;
    }

    getMeses() {
        return this.meses;
    }
}