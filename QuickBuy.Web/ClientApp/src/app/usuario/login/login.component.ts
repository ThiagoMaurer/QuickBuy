import { Component, OnInit } from "@angular/core"
import { Usuario } from "../../model/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioService } from "../../services/usuario/usuario.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"] //caso queira ter mais de um css, só colocar ["./style.css", "./main.css"]
})

export class LoginComponent implements OnInit { //relacionado ao ciclo de vida do componente, vai ser falado sobre mais tarde
    public usuario: Usuario;
    public mensagem: string;
    public returnUrl: string;
    public ativar_spinner: boolean;

    constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioService: UsuarioService) {
        this.usuario = new Usuario();
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl']; //buscando o returnUrl definido no queryParams do guarda.rotas.ts
        this.usuario = new Usuario();
    }

    entrar(): void {
        this.ativar_spinner = true;
        this.usuarioService.verificarUsuario(this.usuario)
            .subscribe(
                usuario_json => {
                    this.mensagem = null;
                    this.usuarioService.usuario = usuario_json;

                    sessionStorage.setItem("usuario-autenticado", "1");

                    if (this.returnUrl == null)
                    {
                        this.router.navigate(["/"]);
                    }
                    else
                    {
                        this.router.navigate([this.returnUrl]);
                    }
                },
                err => {
                    this.ativar_spinner = false;
                    this.mensagem = err.error;
                    console.log(err.error);
                }
            );
    }

}
