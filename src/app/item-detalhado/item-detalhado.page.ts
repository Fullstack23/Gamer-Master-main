import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-item-detalhado',
  templateUrl: './item-detalhado.page.html',
  styleUrls: ['./item-detalhado.page.scss'],
})
export class ItemDetalhadoPage implements OnInit {
  activeVariacao: string;
  selectedhardware: number;
  selectedperiferico: number;
  selectedproduto: number;
  constructor(
    private animatioCntrl: AnimationController,
  ) { }

  ngOnInit() {
    this.activeVariacao = 'size';
  }
  segmentChanged(e: any) {
    this.activeVariacao = e.detail.value;

    if (this.activeVariacao === 'color') {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.produtos'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
      .fromTo('opacity', '1', '0.2')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.perifericos'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();
    } else {
      this.animatioCntrl.create()
      .addElement(document.querySelector('.produtos'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(100%)', 'translateX(0)')
      .fromTo('opacity', '0.2', '1')
      .play();

      this.animatioCntrl.create()
      .addElement(document.querySelector('.perifericos'))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
      .fromTo('opacity', '1', '0.2')
      .play();
    }
  }

  changeProduto(produto: number) {
    this.selectedproduto = produto;
  }

  changePeriferico(periferico: number) {
    this.selectedperiferico = periferico;
  }

}

