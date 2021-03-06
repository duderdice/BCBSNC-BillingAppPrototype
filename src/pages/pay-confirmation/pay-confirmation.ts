import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-pay-confirmation',
  templateUrl: 'pay-confirmation.html',
})
export class PayConfirmationPage {
      private dashboardPage;

      constructor(public navCtrl: NavController, public navParams: NavParams) {
          this.dashboardPage = DashboardPage;
      }

      private returnToDashboard() {
          this.navCtrl.setRoot(this.dashboardPage);
      }

      ionViewDidLoad() {
        console.log('ionViewDidLoad Help');
      }

}
