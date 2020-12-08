import { Component, OnInit } from "@angular/core";
import { Produto } from "../../model/produto";
import { ProdutoService } from "../../services/produto/produto.service";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";

@Component({
    selector: "app-loja-efetivar",
    templateUrl: "./loja.efetivar.component.html",
    styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
    public produtos: Produto[];
    public lojaCarrinhoCompras: LojaCarrinhoCompras;

    constructor(private produtoService: ProdutoService) {

    }

    ngOnInit(): void {
        this.lojaCarrinhoCompras = new LojaCarrinhoCompras();
        this.produtos = this.lojaCarrinhoCompras.obterProdutos();
    }
    
}
