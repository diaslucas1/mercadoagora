import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProdutosPage } from '../produtos/produtos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { CancaoPage } from '../cancao/cancao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  abreProdutos(){
    this.navCtrl.push(ProdutosPage);
  }

  abreCarrinho(){
    this.navCtrl.push(CarrinhoPage);
  }

  abreCancao(){
    this.navCtrl.push(CancaoPage);
  }

}
