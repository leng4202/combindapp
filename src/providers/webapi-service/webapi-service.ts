import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {ToastController } from 'ionic-angular';
import {GlobalProvider} from '../global/global';

@Injectable()
export class WebapiServiceProvider {
  // base URL API 
  baseUrl: any;
  constructor(
    public http: Http ,
    public toast:ToastController ,
    public grobal:GlobalProvider) {
    this.baseUrl = this.grobal.baseURLAPI;
  }

  //POST
  postData(objdata, segment) {
    return new Promise((resolve, reject) => {
      //header
      let headers = new Headers();
      headers.append('Authorization', this.grobal.authKey);
      headers.append('Content-Type', 'application/json');
      //JSON.stringify แปลง json
      this.http.post(this.baseUrl + segment, JSON.stringify(objdata), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          if(err.status == 0){
           this.toast.create({
             message:'ติดต่อ API ไมไ่ด้',
             duration:3000
           }).present();
          }
          reject(err);
        });
    });
  }

   //GET
   getData(segment) {
    return new Promise((resolve, reject) => {
      //header
      let headers = new Headers();
      headers.append('Authorization', this.grobal.authKey);
      headers.append('Content-Type', 'application/json');
      //JSON.stringify แปลง json
      this.http.get(this.baseUrl + segment, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          if(err.status == 0){
           this.toast.create({
             message:'ติดต่อ API ไมไ่ด้',
             duration:3000
           }).present();
          }
          reject(err);
        });
    });
  }



}
