import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { PayConfirmationPage } from '../pay-confirmation/pay-confirmation';

@Component({
  selector: 'page-pay-bill',
  templateUrl: 'pay-bill.html'
})
export class PayBillPage {

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController) {}

  presentLoading() {

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500
    });
    loader.present().then(() => {
      setTimeout(() => {
        this.navCtrl.push(PayConfirmationPage);
      }, 1300);
    });;
  }
}
