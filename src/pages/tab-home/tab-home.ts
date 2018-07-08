import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  userDetail: any;
  loginStatus: boolean;
  getTokenKey:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
     
  ) {
    this.getTokenKey = localStorage.getItem('token_key');
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data == null) {
      this.userDetail = { fullname: 'Your are guest' };
      this.loginStatus = true;
    } else {
      this.userDetail = data.userData;
      this.loginStatus = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  register() {
    // this.navCtrl.push(RegisterPage)
    this.app.getRootNav().push(RegisterPage)
  }

  login() {
    this.app.getRootNav().push(LoginPage)
  }
  logout() {
    localStorage.removeItem('userData');  
    this.navCtrl.setRoot(TabsPage);
  }

}
