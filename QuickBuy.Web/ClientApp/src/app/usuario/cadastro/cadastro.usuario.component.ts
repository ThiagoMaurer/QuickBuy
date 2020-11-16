import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioService } from "../../services/usuario/usuario.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: "app-cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html",
    styleUrls: ["./cadastro.usuario.component.css"]
})

export class CadastroUsuarioComponent implements OnInit {

    public usuario: Usuario;

    constructor(private usuarioService: UsuarioService) {
        
    }

    ngOnInit(): void {
        this.usuario = new Usuario();
    }

    public cadastrar(): void {
        alert("Nome: " + this.usuario.nome + "\nSenha: " + this.usuario.senha + "\nEmail: " + this.usuario.email + "\nSobrenome: " + this.usuario.sobrenome);
        this.usuarioService.cadastrarUsuario(this.usuario)
            .subscribe(
                usuarioJSON => {
                    alert("Chegou no alert de sucesso, ou seja, chegou no post do UsuarioController (C#)");
                },
                ex => {
                    alert("Ocorreu um erro: " + ex.error);
                }
            );
    }

}
