import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioService } from "../../services/usuario/usuario.service";

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
        this.usuarioService.cadastrarUsuario(this.usuario)
            .subscribe(
                successJSON => {
                    
                },
                error => {

                }
            );
    }

}
