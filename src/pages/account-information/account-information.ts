import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BillingHistoryPage } from '../billing-history/billing-history';

@Component({
  selector: 'page-account-information',
  templateUrl: 'account-information.html',
})
export class AccountInformationPage {
    private billingHistoryPage;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.billingHistoryPage = BillingHistoryPage;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AccountInformation');
    }

}
