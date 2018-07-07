import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //กำหนดตัวแปลผูกฟอร์ม (Model)
  userData = {
    "username":"",
    "password":"",
    "fullname":"",
    "email" : "",
    "tel":""
  }

  //ตัวแปรรับข้อมูลจาก api

  responseData:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public webapi: WebapiServiceProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  login() {
    this.app.getRootNav().push(LoginPage)
  }

  gotoDashboard() {

    this.navCtrl.setRoot(TabsPage)
  }

  signup(){
    //console.log(this.userData);
    this.webapi.postData(this.userData,'register.php').then((result)=>{
      this.responseData = result;
      console.log(this.responseData);

      if(this.responseData.userData){
        let alert = this.alertCtrl.create({
          title:"สถานะการลงทะเบียน",
          subTitle:"ลงทะเบียนเรียบร้อยแล้ว",
          buttons:['Dismiss']
        });
        alert.present();
        //ส่งกลับไปหน้าหลัก (dashboard)
        this.navCtrl.setRoot(LoginPage);
      }
    },(err)=>{
      console.log(err);
    });
  }

}
