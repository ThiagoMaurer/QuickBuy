import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../model/produto";
import { ProdutoService } from "../../services/produto/produto.service";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";

@Component({
    selector: "app-loja-produto",
    templateUrl: "./loja.produto.component.html",
    styleUrls: ["./loja.produto.component.css"]
})

export class LojaProdutoComponent implements OnInit {

    public produto: Produto;
    public lojaCarrinhoCompras: LojaCarrinhoCompras; //dá acesso aos métodos do componente LojaCarrinhoCompras

    ngOnInit(): void {
        this.lojaCarrinhoCompras = new LojaCarrinhoCompras();
        var produtoDetalhe = sessionStorage.getItem("produtoDetalhe");
        if (produtoDetalhe) {
            this.produto = JSON.parse(produtoDetalhe);
        }
    }

    constructor(private produtoService: ProdutoService, private router: Router) {

    }

    public comprar() {
        this.lojaCarrinhoCompras.adicionar(this.produto);
        this.router.navigate(["/loja-efetivar"]);
    }
}
