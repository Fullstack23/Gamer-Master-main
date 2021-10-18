import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  produtos = [
    { img: '../../assets/cart/cart1.png', name: 'SSD Viper', model: 'VPR100-512GM28H', price: 'R$ 599,90', id: 1, value: 1 },
    { img: '../../assets/cart/cart2.png', name: 'Computador', model: 'Intel Core I5 10400F', price: 'R$ 4.779,00', id: 2, value: 1 },
    { img: '../../assets/cart/cart3.png', name: 'Processador', model: 'Processador AMD Ryzen 7', price: 'R$ 2.299,90', id: 3, value: 1 },
    { img: '../../assets/cart/cart4.png', name: 'Jogo',         model: 'CyperPunk 2077',    price: 'R$ 79,90', value: 1 }
  ];

  constructor() { }


  ngOnInit() {
  }

  sub(id) {
    this.produtos[id - 1].value--;
  }

  add(id) {
    this.produtos[id - 1].value++;
  }


}
