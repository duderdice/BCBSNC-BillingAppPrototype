import { Component } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';

import { PayBillPage } from '../pay-bill/pay-bill';
import { AccountInformationPage } from '../account-information/account-information';
import { HelpPage } from '../help/help';
import { BillingHistoryPage } from '../billing-history/billing-history';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  public nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {

  }

  openPage(page) {
    switch (page) {
      case "pay":
        this.navCtrl.setRoot(PayBillPage);
        break;

      case "info":
        this.navCtrl.setRoot(AccountInformationPage);
        break;

      case "bill":
        this.navCtrl.setRoot(BillingHistoryPage);
        break;

      case "help":
        this.navCtrl.setRoot(HelpPage);
        break;

      default:
        break;
    }
  }
}
