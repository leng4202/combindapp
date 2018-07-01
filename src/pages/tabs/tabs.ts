import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabArticlePage } from '../tab-article/tab-article';
import { TabContactPage } from '../tab-contact/tab-contact';
import { TabCoursePage } from '../tab-course/tab-course';
import { TabHomePage } from '../tab-home/tab-home';
import { TabServicePage } from '../tab-service/tab-service';

@IonicPage()
@Component({ 
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any = TabHomePage;
  tab2:any = TabCoursePage;
  tab3:any = TabServicePage;
  tab4:any = TabArticlePage;
  tab5:any = TabContactPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
