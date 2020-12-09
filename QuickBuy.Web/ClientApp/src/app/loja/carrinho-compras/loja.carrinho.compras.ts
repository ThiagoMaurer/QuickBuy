import { Produto } from "../../model/produto";

export class LojaCarrinhoCompras {

    public produtos: Produto[] = []; //ai nao precisa do OnInit

    public adicionar(produto: Produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (!produtoLocalStorage) {
            //caso não exista nada dentro do localStorage, adiciona um único item
            this.produtos.push(produto);
        }
        else {
            //caso já exista algo dentro do localStorage, faz a leitura e insere um novo no array/lista
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos.push(produto);
        }

        localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    }

    public obterProdutos(): Produto[] {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            return JSON.parse(produtoLocalStorage);
        }
    }

    public removerProduto(produto: Produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos = this.produtos.filter(p => p.id != produto.id); //traz todos da lista de produto menos o que tem id igual ao produto (parametro)
            localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
        }
    }

    public atualizar(produtos: Produto[]) {
        localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
    }

}
