import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Crash Bandicoot Remake';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 3;
  precoProduto: number = 49.90;
  promocao: boolean = true;
  foto: string = '/assets/img/crash.jpg';
  plataforma = 'PS4';

  constructor() {
    // Variaveis de string com concatenação
    // this.anuncio = 'O ' + this.nomeProduto + ' está em promoção!';
/*
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ',  this.anuncio);
    console.log('ID:', this.idProduto);
    console.log('Preço: ', this.precoProduto);
    console.log('Promoção:', this.promocao); */
   }

  ngOnInit(): void {
  }

}
