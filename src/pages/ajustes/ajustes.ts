import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import {ModalPage} from "../modal/modal";

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalController: ModalController) {
    }

    activarPrincipal() {
        this.navCtrl.parent.select(2);
    }

    mostrarModal() {
        let modal = this.modalController.create(ModalPage, {nombre: 'Alvaro', edad: 26});
        modal.present();

        // Cuando se cierra
        modal.onDidDismiss(parametros => {
            // Si es que vienen parametros
            if (parametros) {
                console.log('Data del modal: ');
                console.log(parametros);
            }
        })
    }
}
