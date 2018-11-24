import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from '../../pages/carrinho/carrinho';
import { ProdutosPage } from '../../pages/produtos/produtos';

/**
 * Generated class for the PromocoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promocoes',
  templateUrl: 'promocoes.html',
})
export class PromocoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromocoesPage');
  }

  abreProdutos(){
    this.navCtrl.push(ProdutosPage);
  }

  abreCarrinho(){
    this.navCtrl.push(CarrinhoPage);
  }

}
