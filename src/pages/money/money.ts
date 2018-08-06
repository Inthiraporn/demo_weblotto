import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-money',
  templateUrl: 'money.html',
})
export class MoneyPage {

  constructor(private modal: ModalController,public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController,public actionSheetCtrl: ActionSheetController) {
  }

  gohome(){
  this.navCtrl.push(HomePage);
}
confirmm() {
  const myModal = this.modal.create('ConfirmmPage');
  myModal.present();
}
}