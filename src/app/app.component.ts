import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { FCM } from '@ionic-native/fcm';
import { ShowpushdetailPage } from '../pages/showpushdetail/showpushdetail';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private fcm: FCM,
    public alertCtrl:AlertController,
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: "calendar", title: 'ตารางอบรม', component: SideSchedulePage },
      { icon: "albums", title: 'ผลงานของเรา', component: SidePortfolioPage },
      { icon: "logo-bitcoin", title: 'ช่องทางชำระเงิน', component: SidePaymentPage },
      { icon: "settings", title: 'ตั้งค่าระบบ', component: SideSettingPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //ลงทะเบียนเครื่องเพื่อส่ง notification
      if (!this.platform.is('core')) {
        this.fcm.subscribeToTopic('all');
        this.fcm.getToken().then(token=>{
          //alert(token);
          localStorage.setItem('token_key',token); 
        });

        //ส่วนรับ push
        this.fcm.onNotification().subscribe(data =>{
          //background
          if (data.wasTapped) {
            this.nav.push(ShowpushdetailPage,{sid:data.pid,title:data.title,img:data.image});
          }else{
            //fourground 
          //  alert(JSON.stringify(data));
            let alertdig = this.alertCtrl.create({
                title:data.title,
                subTitle:data.body,
                message:'pid='+data.pid,
                buttons:[{
                    text:'ดูรายละเอียด',
                    handler:()=>{
                      this.nav.push(ShowpushdetailPage,{sid:data.pid,title:data.title,img:data.image})
                    }
                }],

            });
            alertdig.present();
          }
        });

      }

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
