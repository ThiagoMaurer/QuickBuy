import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../model/produto";
import { ProdutoService } from "../../services/produto/produto.service";

@Component({
    selector: "app-loja-pesquisa",
    templateUrl: "./loja.pesquisa.component.html",
    styleUrls: ["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponent implements OnInit {
    public produtos: Produto[];

    ngOnInit(): void {
        
    }

    constructor(private produtoService: ProdutoService, private router: Router) {
        produtoService.obterTodosProdutos()
            .subscribe(
                listaProdutos => {
                    this.produtos = listaProdutos;
                },
                ex => {
                    alert(ex.error);
                }
            )
    }

    public abrirProduto(produto: Produto) {
        sessionStorage.setItem("produtoDetalhe", JSON.stringify(produto));
        this.router.navigate(['/loja-produto']);
    }
}
