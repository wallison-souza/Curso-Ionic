import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private url:string = 'http://localhost:3000/users';
  public users: Array<{}>;
  
  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
    this.http.get(this.url).map(res => res.json())
      .subscribe(data => {this.users = data;
      });
  }
  goToUsers() {
    this.navCtrl.push(TestPage);
  }
}
