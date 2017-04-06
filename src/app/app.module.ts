import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PayBillPage } from '../pages/pay-bill/pay-bill';
import { AccountInformationPage } from '../pages/account-information/account-information';
import { HelpPage } from '../pages/help/help';
import { BillingHistoryPage } from '../pages/billing-history/billing-history';
import { PayConfirmationPage } from '../pages/pay-confirmation/pay-confirmation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    PayBillPage,
    AccountInformationPage,
    HelpPage,
    BillingHistoryPage,
    PayConfirmationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    PayBillPage,
    AccountInformationPage,
    HelpPage,
    BillingHistoryPage,
    PayConfirmationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
