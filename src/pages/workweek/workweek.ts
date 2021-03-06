import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from "../about/about";

/**
 * Generated class for the WorkweekPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-workweek',
  templateUrl: 'workweek.html',
})
export class WorkweekPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkweekPage');
  }
  addWork(): void {
    console.log("calling addwork");
  }
  open() {
    this.navCtrl.push(AboutPage);
  }

}
