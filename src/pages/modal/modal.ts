import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-modal',
    templateUrl: 'modal.html',
})
export class ModalPage {
    nombre: string;
    edad:number;

    constructor(public navParams: NavParams,
                public viewCtrl: ViewController) {
        this.nombre = this.navParams.get('nombre');
        this.edad = this.navParams.get('edad');
        console.log(this.nombre, this.edad);
    }

    cerrarConParametros() {
        let data = {
            nombre: 'Alvaro Bunster',
            edad: 26,
            coords: {
                lat: 10,
                lng: -10
            }
        };
        this.viewCtrl.dismiss( data );
    }

    cerrarSinParametros() {
        this.viewCtrl.dismiss();
    }
}
