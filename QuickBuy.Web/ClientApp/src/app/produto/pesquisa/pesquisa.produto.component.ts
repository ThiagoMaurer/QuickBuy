import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../model/produto";
import { ProdutoService } from "../../services/produto/produto.service";

@Component({
    selector: "pesquisa-produto",
    templateUrl: "./pesquisa.produto.component.html",
    styleUrls: ["./pesquisa.produto.component.css"]
})

export class PesquisaProdutoComponent implements OnInit {

    public produtos: Produto[];

    ngOnInit(): void {
        
    }

    constructor(private produtoService: ProdutoService, private router: Router) {
        this.produtoService.obterTodosProdutos()
            .subscribe(
                listaProdutos => {
                    console.log(listaProdutos);
                    this.produtos = listaProdutos;
                },
                ex => {
                    console.log(ex.Message);
                }
            )
    }

    public adicionarProduto() {
        this.router.navigate(['/produto']);
    }

    public deletarProduto(produto: Produto) {
        var retorno = confirm("Deseja realmente deletar o produto solucionado?");
        if (retorno == true) {
            this.produtoService.deletar(produto)
                .subscribe(
                    novaListaProdutos => {
                        this.produtos = novaListaProdutos;
                        alert("\"" + produto.nome + "\"" + " deletado com sucesso!");
                    },
                    ex => {
                        alert("ERRO: " + ex.Message);
                    }
                );
        }
    }

    public editarProduto(produto: Produto) {
        sessionStorage.setItem('produtoSession', JSON.stringify(produto));
        this.router.navigate(['/produto']);
    }

}
