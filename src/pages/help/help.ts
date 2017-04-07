import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
    private faqs: Array<any> = [
        {
            question: 'How do I pay my bill?',
            answer: 'Visit the Pay Bill page'
        },
        {
            question: 'How long will it take to get my Member ID card?',
            answer: 'We will mail you a new ID card within 7-10 business days. In the meantime, you can view or print a temporary ID card online.'
        },
        {
            question: 'I am trying to change my password and I cannot get into my account. What do I do?',
            answer: 'Call Web Support'
        },
        {
            question: 'Do I have a grace period for making premium payments?',
            answer: 'Yes, all members have a grace period and it starts from the due date on the invoice.'
        },
        {
            question: 'How do I cancel my policy?',
            answer: 'If you purchased your own plan through HealthCare.gov, you will need to cancel your plan on HealthCare.gov.'
        },
        {
            question: 'How can I see and manage all of my policies in one place? Can I add them to my account?',
            answer: 'You will be asked to sign in to that account. Once you enter your User ID and password, you will have the option to combine the accounts.'
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad Help');
    }

}
