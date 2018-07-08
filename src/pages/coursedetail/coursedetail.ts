import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,App } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import {GlobalProvider} from '../../providers/global/global';

@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {

  getcid:number;
  imgPath:any;
  responData:any;
  
    constructor(public navCtrl: NavController, public navParams: NavParams,public app:App, public webapi: WebapiServiceProvider,public alertCtrl: AlertController,public global:GlobalProvider) {

      this.imgPath = this.global.baseURLAPI;
      this.getcid = this.navParams.get('cid');
    }

  ionViewDidLoad() {
    this.loadpage(this.getcid);
  }

  loadpage(cid){
    this.webapi.getData('feed_course_detail.php?cid='+cid).then((result)=>{
      console.log(result); 
      this.responData = result;
    },(error)=>{ 
      console.log(error);
    });

  }

}
