import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform  } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { NativeAudio } from '@ionic-native/native-audio';


@IonicPage()
@Component({
  selector: 'page-tab-chat',
  templateUrl: 'tab-chat.html',
})
export class TabChatPage {

  

  //กำหนดตัวแปลเก็บชื่อข้อความ
  fullname:string ="";
  message:string = "";
  _chatSubscription;
  messages:object[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public audio:NativeAudio,
    public platfom:Platform,
  ) {
    const data = JSON.parse(localStorage.getItem('userData'));
    if (data== null) {
      this.fullname = 'Guest';
    } else {
      this.fullname = data.userData.fullname;
    }

    //read from firebase
    this._chatSubscription = this.db.list('/chat').valueChanges().subscribe((res)=>{
      //console.log(res);

      this.messages = res;
    },(err)=>{
      console.log(err);
    });

    //play sound
    if(!this.platfom.is('core')){
    this.audio.preloadSimple('u1','assets/sound/get_outto.mp3').then(null);
    }
  }

  ionViewDidLoad() {
   
  }

  sendMessage(){
    //  ตรวจค่าว่าง
  if (this.message != '') {

    this.db.list('/chat').push({
      username:this.fullname,
      message:this.message,
    }).then(()=>{
      //message send
      if(!this.platfom.is('core')){
      this.audio.play('u1').then(null);
      //this.contentArea.scrollToBottom();
      }
    },(err)=>{
      //error masage
      console.log(err);
    });

    this.message = '';
  }
}

}
