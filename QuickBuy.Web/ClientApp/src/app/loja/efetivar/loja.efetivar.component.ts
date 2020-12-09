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
    public total: number;

    constructor(private produtoService: ProdutoService) {

    }

    ngOnInit(): void {
        this.lojaCarrinhoCompras = new LojaCarrinhoCompras();
        this.produtos = this.lojaCarrinhoCompras.obterProdutos();
        this.atualizarTotal();
    }

    public atualizarPreco(produto: Produto, quantidade: number) {
        if (!produto.precoOriginal) {
            produto.precoOriginal = produto.preco;
        }

        if (quantidade <= 0) {
            quantidade = 1;
            produto.quantidade;
        }

        produto.preco = produto.precoOriginal * quantidade;
        this.lojaCarrinhoCompras.atualizar(this.produtos);
        this.atualizarTotal();
    }

    public remover(produto: Produto) {
        this.lojaCarrinhoCompras.removerProduto(produto);
        this.produtos = this.lojaCarrinhoCompras.obterProdutos();
        this.atualizarTotal();
    }

    public atualizarTotal() {
        this.total = this.produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
    }
    
}
