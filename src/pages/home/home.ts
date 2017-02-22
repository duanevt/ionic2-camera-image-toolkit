import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log("let see cordova");
    if (cordova !== undefined) {
      console.log("cordova not undefined");
      if (cordova.file !== undefined) {
        console.log("cordova file is presetn");

      }
      else {
        console.log("no cordova file");
      }

      if (cordova.Camera !== undefined) {
        console.log("got cordova Camera");
      }
      if (cordova.camera !== undefined) {
        console.log("got cordova little camera");
      }
    }
    else {
      console.log("cordova undefined");
    }

  }

}
