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
    public ativar_spinner: boolean;
    public mensagem: string;
    public usuarioCadastrado: boolean;

    constructor(private usuarioService: UsuarioService) {
        
    }

    ngOnInit(): void {
        this.usuario = new Usuario();
    }

    public cadastrar(): void {
        this.ativar_spinner = true;
        this.usuarioService.cadastrarUsuario(this.usuario)
            .subscribe(
                usuarioJSON => {
                    this.usuarioCadastrado = true;
                    this.mensagem = "";
                    this.ativar_spinner = false;
                },
                ex => {
                    this.mensagem = ex.error;
                    this.ativar_spinner = false;
                }
            );
    }

}
