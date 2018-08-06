import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Web1Page } from '../web1/web1';
import { WebR1Page } from '../web-r1/web-r1';
import { MoneyPage } from '../money/money';
import { Web3Page } from '../web3/web3';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Web1Page');
  }
  
  goweb1(){
    this.navCtrl.push(Web1Page)
  }
  goweb3(){
    this.navCtrl.push(Web3Page)
  }
  gomoney(){
    this.navCtrl.push(MoneyPage)
  }


}
