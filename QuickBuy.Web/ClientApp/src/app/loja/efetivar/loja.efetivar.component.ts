import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemPedido } from "../../model/itemPedido";
import { Pedido } from "../../model/pedido";
import { Produto } from "../../model/produto";
import { PedidoService } from "../../services/pedido/pedido.service";
import { UsuarioService } from "../../services/usuario/usuario.service";
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

    constructor(private pedidoService: PedidoService, private usuarioServico: UsuarioService, private router: Router) {

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

    public efetivarCompra() {
        this.pedidoService.efetivarCompra(this.criarPedido())
            .subscribe(
                idPedido => {
                    console.log(idPedido);
                    sessionStorage.setItem("idPedido", idPedido.toString());
                    this.produtos = [];
                    this.lojaCarrinhoCompras.limparCarrinhoCompras();
                    //rediricionamento demonstrando que a compra ocorreu com sucesso
                    this.router.navigate(["compra-realizada-sucesso"]);
                },
                ex => {
                    console.log(ex.error);
                }
            );
    }

    public criarPedido(): Pedido {
        let pedido = new Pedido();
        pedido.usuarioId = this.usuarioServico.usuario.id;
        pedido.cep = "93900000";
        pedido.cidade = "Ivoti";
        pedido.estado = "Rio Grande do Sul";
        pedido.dataPrevisaoEntrega = new Date();
        pedido.formaPagamentoId = 1;
        pedido.numeroEndereco = 1416;
        pedido.enderecoCompleto = "Rua Henrique Dias, Jardim Panorâmico";

        this.produtos = this.lojaCarrinhoCompras.obterProdutos();
        for (let produto of this.produtos) {
            let itemPedido = new ItemPedido();
            itemPedido.produtoId = produto.id;
            itemPedido.quantidade = produto.quantidade;

            if (!produto.quantidade)
                produto.quantidade = 1;

            itemPedido.quantidade = produto.quantidade;
            pedido.itensPedido.push(itemPedido);
        }

        return pedido;
    }
    
}
