import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BillingHistoryInfoPage } from '../billing-history-info/billing-history-info';

@Component({
  selector: 'page-billing-history',
  templateUrl: 'billing-history.html',
})
export class BillingHistoryPage {
    private billingHistoryInfoPage;
    private billingHistory: Array<any> = [
        {
            date: 'March 2017',
            balance: '$123.84'
        },
        {
            date: 'February 2017',
            balance: '$0.00'
        },
        {
            date: 'January 2017',
            balance: '$223.45'
        },
        {
            date: 'December 2016',
            balance: '$423.45'
        },
        {
            date: 'November 2016',
            balance: '$0.00'
        },
        {
            date: 'October 2016',
            balance: '$0.00'
        },
        {
            date: 'September 2016',
            balance: '$100.00'
        },
        {
            date: 'August 2016',
            balance: '$1224.95'
        },
        {
            date: 'July 2016',
            balance: '$0.00'
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.billingHistoryInfoPage = BillingHistoryInfoPage;
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad BillingHistory');
    }

}
