import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowpushdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showpushdetail',
  templateUrl: 'showpushdetail.html',
})
export class ShowpushdetailPage {

  getSID:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getSID = navParams.get('sid');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowpushdetailPage');
  }

}
