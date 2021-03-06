
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Web2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-web-r1',
  templateUrl: 'web-r1.html',
})
export class WebR1Page  {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  doAlertr1() {
    let alert = this.alerCtrl.create({
      title: 'mana',
      message: 'Accept agreement',
      buttons: [
        {
          text:'OK',
          role: 'OK',
          handler: () => {
            console.log('Destructive clicked');
            this.navCtrl.push(HomePage);
          }
        }
      ],
      
    });
    alert.present()
  }

}