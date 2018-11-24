import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from '../../pages/carrinho/carrinho';

import { CarrinhoProvider } from '../../providers/carrinho/carrinho';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {
  items;
  carrinho = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public carrinhoProvider: CarrinhoProvider) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  abreProdutos(){
    this.navCtrl.push(ProdutosPage);
  }

  abreCarrinho(){
    this.navCtrl.push(CarrinhoPage);
  }

  
  initializeItems() {
    this.items = [
      {id:1, titulo:"Bebida De Soja Ades Uva 1L", preco:"R$ 5,15", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/159714-200-200/bebida-de-soja-ades-uva-1l_159539406_7894000001159.jpg?v=636721838612670000", mercado: "Cidade Canção"},
      {id:2, titulo:"Óleo De Soja Soya 900Ml", preco:"R$ 3,35", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/158766-200-200/oleo-de-soja-soya-900ml_159413224_7891107101621.jpg?v=636721795518670000", mercado: "Cidade Canção"},
      {id:3, titulo:"Espuma de Barbear Prestobarba Sensitive Pele Sensivel 56g", preco:"R$ 4,79", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/167061-200-200/258691_Detalhes.jpg?v=636782633167330000", mercado: "Pão de Açúcar"},
      {id:4, titulo:"Vinho Tinto De Mesa Merlot Chile Concha Y Toro 750Ml", preco:"R$ 28,90", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/155631-200-200/vinho-tinto-de-mesa-merlot-chile-concha-y-toro-750ml_167188407_1735840000000.jpg?v=636717931545930000", mercado: "Pão de Açúcar"},
      {id:5, titulo:"Achocolatado Em Pó Nescau 2.0 Actigen-E 400G", preco:"R$ 6,59", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/155395-200-200/achocolatado-em-po-nescau-2-0-actigen-e-400g_167057041_1002980000000.jpg?v=636717927278200000", mercado: "Pão de Açúcar"},
      {id:6, titulo:"Condicionador Tresemmé Hidratação Profunda 400ml", preco:"R$ 16,99", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/165738-200-200/condicionador-tresemme-expert-hidratacao-profunda-400ml_167763725_7891150018754.jpg?v=636758328706730000", mercado: "Dia"},
      {id:7, titulo:"Leite Condensado Piracanjuba 395G", preco:"R$ 3,99", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/162320-200-200/leite-condensado-piracanjuba-395g_159541626_7898215152002.jpg?v=636721900284830000", mercado: "Dia"},
    ];
  }

  //Lógica para o search
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
