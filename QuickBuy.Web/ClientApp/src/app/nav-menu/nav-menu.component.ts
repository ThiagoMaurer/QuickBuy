import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LojaCarrinhoCompras } from '../loja/carrinho-compras/loja.carrinho.compras';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
    isExpanded = false;
    public lojaCarrinhoCompras: LojaCarrinhoCompras;

    constructor(private router: Router, private usuarioService: UsuarioService) {

    }
    ngOnInit(): void {
        this.lojaCarrinhoCompras = new LojaCarrinhoCompras();
    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    public usuarioLogado(): boolean {
        return this.usuarioService.usuario_autenticado();
    }

    public usuario_administrador(): boolean {
        return this.usuarioService.usuario_administrador();
    }

    public sair(): void {
        this.usuarioService.limpar_sessao();
        this.router.navigate["/login"];
    }

    get usuario() {
        return this.usuarioService.usuario;
    }

    public temItensCarrinhoCompras(): boolean {
        return this.lojaCarrinhoCompras.temItensCarrinhoCompras();
    }
}
