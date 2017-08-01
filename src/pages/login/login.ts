import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// firebase login

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { WorkweekPage } from "../workweek/workweek";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') username;
  @ViewChild('password') password;
  userEmail: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, public alertCtrl: AlertController,
    private fireAuth: AngularFireAuth) {
    this.listenForAuthChange();
  }

  listenForAuthChange(): void {
    console.log("Listening for auth change");

    this.fireAuth.authState.subscribe(user => {
      if (!user) {
        this.userEmail = null;
        console.log('user not logged in');
      } else {
        this.userEmail = user.email;
        console.log('user logged in as: ' + user.email);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /**
   * Signs in a user
   */
  signIn() {
    console.log("loggin in user " + this.username.value);

    this.fireAuth.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
      .then(res => {
        console.log("fire signing " + JSON.stringify(res));

        this.alertCtrl.create({
          title: 'Login',
          subTitle: 'Logged in user: ' + this.username.value,
          buttons: ['OK']
        })
          .present()
          .then(res => {
            this.navCtrl.setRoot(WorkweekPage);
          });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  signOut() {
    this.fireAuth.auth.signOut();
  }

}
