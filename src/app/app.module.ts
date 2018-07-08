import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar'; 
import { SplashScreen } from '@ionic-native/splash-screen';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import { HttpModule } from '@angular/http';
import { GlobalProvider } from '../providers/global/global';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { TabChatPage } from '../pages/tab-chat/tab-chat';

//module firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//module sound
import { NativeAudio } from '@ionic-native/native-audio';

//module notification
import { FCM } from '@ionic-native/fcm';
import { ShowpushdetailPage } from '../pages/showpushdetail/showpushdetail';



var config = {
  apiKey: "AIzaSyCs0iWG2Ed9oeobPY1g1MTx0dAdo7Y6Ebw",
  authDomain: "robert-combindchatapp.firebaseapp.com",
  databaseURL: "https://robert-combindchatapp.firebaseio.com",
  projectId: "robert-combindchatapp",
  storageBucket: "robert-combindchatapp.appspot.com",
  messagingSenderId: "728466710287"
};


@NgModule({
  declarations: [
    MyApp,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    TabArticlePage,
    TabContactPage,
    TabCoursePage,
    TabHomePage,
    TabServicePage,
    TabsPage,
    RegisterPage,
    LoginPage,
    CoursedetailPage,
    TabChatPage,
    ShowpushdetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    TabArticlePage,
    TabContactPage,
    TabCoursePage,
    TabHomePage,
    TabServicePage,
    TabsPage,
    RegisterPage,
    LoginPage,
    CoursedetailPage,
    TabChatPage,
    ShowpushdetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    GlobalProvider,
    NativeAudio,
    FCM,
  ]
})
export class AppModule {}
