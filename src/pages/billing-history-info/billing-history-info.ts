import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'billing-history-info',
  templateUrl: 'billing-history-info.html',
})
export class BillingHistoryInfoPage {
      private dashboardPage;

      constructor(public navCtrl: NavController, public navParams: NavParams) {
      }

      ionViewDidLoad() {
        console.log('ionViewDidLoad Help');
      }

}