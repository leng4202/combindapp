import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App,AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import {GlobalProvider} from '../../providers/global/global';
import { CoursedetailPage } from '../coursedetail/coursedetail';

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {

responData:any;
imgPath:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App, public webapi: WebapiServiceProvider,public alertCtrl: AlertController,public global:GlobalProvider) {

      this.imgPath = this.global.baseURLAPI;
  }

  ionViewDidLoad() {
    this.loadpage();
  }

  
  doRefresh(refresher) {
    //console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.loadpage();
    }, 2000);
  }

  loadpage(){
    this.webapi.getData('feed_course.php').then((result)=>{
      console.log(result); 
      this.responData = result;
    },(error)=>{
      console.log(error);
    });

  }
 
  courseDetail(cid){
    this.app.getRootNav().push(CoursedetailPage,{
      cid:cid
    });
     
  }



}
 