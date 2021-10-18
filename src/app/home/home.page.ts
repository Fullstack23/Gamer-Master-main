import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categorias = [];
  public precodeProdutos = [];
  public melhorvendadeProdutos = [];

  constructor(private data: DataService,
    ) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.categorias = this.data.getCategorias();
    this.precodeProdutos = this.data.getPrecodeProdutos();
    this.melhorvendadeProdutos = this.data.getMelhoVendadeProdutos();
  }
}

