import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { CarrinhoPage } from '../pages/carrinho/carrinho';
import { CancaoPage } from '../pages/cancao/cancao';
import { PromocoesPage } from '../pages/promocoes/promocoes';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarrinhoProvider } from '../providers/carrinho/carrinho';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdutosPage,
    CarrinhoPage,
    CancaoPage,
    PromocoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProdutosPage,
    CarrinhoPage,
    CancaoPage,
    PromocoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarrinhoProvider
  ]
})
export class AppModule {}
