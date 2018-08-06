import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Web1Page } from '../pages/web1/web1';
import { WebR1Page } from '../pages/web-r1/web-r1';
import { MoneyPage } from '../pages/money/money';
import { Web3Page } from '../pages/web3/web3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Web1Page,
    WebR1Page,
    MoneyPage,
    Web3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Web1Page,
    WebR1Page,
    MoneyPage,
    Web3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
