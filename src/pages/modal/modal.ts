import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { CarrinhoProvider } from '../../providers/carrinho/carrinho';


/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  item;
  relacionados;
  carrinho = [];

  constructor(private navParams: NavParams, private view: ViewController, public carrinhoProvider: CarrinhoProvider) {
    this.initializeItem();
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  initializeItem(){
    this.item = [
      {id:1, titulo:"Bebida De Soja Ades Uva 1L", preco:"R$ 5,15", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/159714-1000-1000/bebida-de-soja-ades-uva-1l_159539406_7894000001159.jpg?v=636721838612670000", mercado: "Cidade Canção", descricao: "A Ades é uma marca especializada na produção de bebidas a base de soja que oferece uma variedade de sabores irresistível."}
    ],
    this.relacionados = [
      {id:1, titulo:"Bebida De Soja Ades Morango 1L", preco:"R$ 4,99", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/159025-200-200/bebida-de-soja-ades-morango-1l_159520320_7891150039209.jpg?v=636721822263130000", mercado: "Cidade Canção"},
      {id:2, titulo:"Bebida de Soja Ades Uva 200ml", preco:"R$ 2,35", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/159356-200-200/bebida-de-soja-ades-uva-200ml_159520356_7891700203067.jpg?v=636721829253170000", mercado: "Pão de Açúcar"}
    ]
  }

  //Carrinho
  addCarrinho(item){
    for(let game of this.carrinho){
      if(game.titulo == item.titulo){
        return;
      }
    }

    this.carrinho.push(item);
    this.carrinhoProvider.setStorage('carrinho',this.carrinho);
  }

}
