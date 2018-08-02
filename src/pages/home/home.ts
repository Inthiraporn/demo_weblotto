import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Web1Page } from '../web1/web1';
import { WebR1Page } from '../web-r1/web-r1';



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
  gowebr1(){
    this.navCtrl.push(WebR1Page)
  }

}
