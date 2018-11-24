import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoProvider } from '../../providers/carrinho/carrinho';

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  carrinho = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public carrinhoProvider:CarrinhoProvider) {
  }

  ionViewDidEnter(){
    this.carrinhoProvider.getStorage('carrinho').then(res =>{
      if(res){
        this.carrinho = res;
      }
    })
  }

  deletarTudo(){
    this.carrinho = [];
    this.carrinhoProvider.setStorage('carrinho',this.carrinho);
  }

  deletarItem(game){
    let novaLista = [];
    for(let item of this.carrinho){
      if(item.titulo != game.titulo){
        novaLista.push(item);
      }
    }
    this.carrinho = novaLista;
    this.carrinhoProvider.setStorage('carrinho',this.carrinho);
  }

}
