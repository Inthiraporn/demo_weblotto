import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfirmmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmm',
  templateUrl: 'confirmm.html',
})
export class ConfirmmPage {

  constructor(public view:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmmPage');
  }
  go(){
    this.navCtrl.push(HomePage);
  }
  closeModal(){
    this.view.dismiss();
  }

}
