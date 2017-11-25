import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
@Component({
    selector: 'page-test',
    templateUrl: 'test.html',
})
export class TestPage {
    public users: any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public http: Http
                ) {
                this.http.get("http://localhost:3000/users/").map(res => res.json())
                .subscribe(data => {
                    this.users = data;
                });
                }
    ionViewDidLoad() {
        console.log('ionViewDidLoad TestPage');
    }
}