import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from '../../pages/carrinho/carrinho';
import { ProdutosPage } from '../../pages/produtos/produtos';

import { CarrinhoProvider } from '../../providers/carrinho/carrinho';

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
      {id:1, titulo:"Açúcar União Refinado Especial 1Kg", precoantigo: "R$ 2,49", preco:"R$ 1,69", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/159371-200-200/acucar-uniao-refinado-especial-1kg_159528810_7891910000197.jpg?v=636721829565570000", mercado: "Cidade Canção"},
      {id:2, titulo:"Arroz Branco TP1", precoantigo: "14,59" ,preco:"R$ 10,99", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/165744-200-200/arroz-camil-tipo-1-5kg_159516366_7896006711155.jpg?v=636758331774700000", mercado: "Cidade Canção"},
      {id:3, titulo:"Água Sem Gás Dia 1,5L", precoantigo: "R$ 1,99",preco:"R$ 0,89", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/164808-200-200/aguas-sem-gas-dia_159526716_8480017335401.jpg?v=636722052800600000", mercado: "Dia"},
      {id:4, titulo:"Macarrão Instantâneo Nissin Galinha Caipira 85G", precoantigo: "R$ 1,49" ,preco:"R$ 1,39", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/158491-200-200/macarrao-instantaneo-nissin-galinha-caipira-85g_159534462_7891079000229.jpg?v=636721790016030000", mercado: "Pão de Açúcar"},
      {id:5, titulo:"Petisco Virbac C.E.T VeggieDent para Cães de até 15kg - 15 unidades", precoantigo:"R$ 79,50",preco:"R$ 59,62", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/173715-200-200/image-583840b9b8284e898ffc5f02c2f91ac5.jpg?v=636783119023630000", mercado: "Pão de Açúcar"},
      {id:6, titulo:"Milho Para Pipoca Yoki Premium 500G", precoantigo: "R$ 3,69",preco:"R$ 3,19", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/158573-200-200/milho-para-pipoca-premium-yoki-500g_159533070_7891095006984.jpg?v=636721791764870000", mercado: "Pão de Açúcar"},
      {id:7, titulo:"Cerveja Colorado Appia OW 300ml", precoantigo: "R$ 8,29",preco:"R$ 3,49", imagem: "https://diagroupbr.vteximg.com.br/arquivos/ids/165661-200-200/Colorado-Appia-One-300ml.jpg?v=636755505018500000", mercado: "Dia"},
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
