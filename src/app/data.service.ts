import { Injectable } from '@angular/core';

// Categoria Interface
export interface ICategoria {
  id: number;
  nome: string;
  imagem: string;
}
//Periferico, Hardware, e Computadores.
// Produto Interface
export interface IProduto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    /* getMelhorVendadeProdutos(): any[] {
      throw new Error('Method not implemented.');
    } */

    // eslint-disable-next-line @typescript-eslint/member-ordering
    constructor() {}

    getCategorias() {
        const categorias = [];

        const cat1: ICategoria = {
            id: 1,
            nome:'',
            
            imagem:'../../assets/categories/categoria-1.png'
        };
        const cat2: ICategoria = {
            id: 2,
            nome: '',
            imagem: '../../assets/categories/categoria-2.png'
          };
          const cat3: ICategoria = {
            id: 3,
            nome: '',
            imagem: '../../assets/categories/categoria-3.png'
          };

          const cat4: ICategoria = {
            id: 4,
            nome: '',
            imagem: '../../assets/categories/categoria-4.png'
          };
          categorias.push(cat1,cat2,cat3,cat4);

          return categorias;
    }

    getPrecodeProdutos() {
        const produtos = [];

        const prod1: IProduto = {
            id: 1,
            nome:'',
            preco:599,
            imagem:'../../assets/produto/prod-4.png'
        };
        const prod2: IProduto = {
            id: 2,
            nome:'',
            preco:4.779,
            imagem:'../../assets/produto/prod-6.png'
        };
        const prod3: IProduto = {
            id: 3,
            nome:'',
            preco:1.399,
            imagem:'../../assets/produto/prod-5.png'
        };
        const prod4: IProduto = {
          id: 4,
          nome:'',
          preco:189.91,
          imagem:'../../assets/produto/prod-7.png'
      };
    produtos.push(prod1, prod2, prod3, prod4);

    return produtos;
    }

    getMelhoVendadeProdutos(){
        const produtos = [];

        const prod1: IProduto = {
            id: 4,
            nome:'SSD Patriot VPR100 Gaming 512GB',
            preco:599,
            imagem:'../../assets/produto/prod-4.png'
        };
        const prod2: IProduto = {
            id: 5,
            nome:'Processador AMD Ryzen 5 1600',
            preco:4.779,
            imagem:'../../assets/produto/prod-5.png'
        };
        const prod3: IProduto = {
            id: 6,
            nome:'Computador Fácil Slim Completo Intel Core I5 10400F Décima Geração',
            preco:1.399,
            imagem:'../../assets/produto/prod-6.png'
        };
        produtos.push(prod1, prod2, prod3);

        return produtos;
    }
}
