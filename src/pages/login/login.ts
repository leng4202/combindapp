import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = {
    "username":"",
    "password":"",
  }
  responseData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App, public webapi: WebapiServiceProvider,public alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
  signup(){
    this.app.getRootNav().push(RegisterPage)  
  }

  register(){

    this.navCtrl.setRoot(RegisterPage)
  }
  login(){
    //console.log(this.userData);
  //console.log(this.userData);
  this.webapi.postData(this.userData,'login.php').then((result)=>{
    this.responseData = result;
    console.log(this.responseData);

    if(this.responseData.userData){
      let alert = this.alertCtrl.create({
        title:"สถานะการลงทะเบียน",
        subTitle:"ลงทะเบียนเรียบร้อยแล้ว",
        buttons:['Dismiss']
      });
      alert.present();
      //local storage
      localStorage.setItem('userData',JSON.stringify(this.responseData));

      //ส่งกลับไปหน้าหลัก (dashboard)
     this.navCtrl.setRoot(TabsPage);
    }
  },(err)=>{
    console.log(err);
  });

  }

  gotoDashboard(){

    this.navCtrl.setRoot(TabsPage)
  }
  

}
