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


    constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioService: UsuarioService) {
        this.usuario = new Usuario();
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl']; //buscando o returnUrl definido no queryParams do guarda.rotas.ts
        this.usuario = new Usuario();
    }

    entrar() {

        this.usuarioService.verificarUsuario(this.usuario)
            .subscribe(
                data => {
                    this.mensagem = null;
                    var usuarioRetorno: Usuario;
                    usuarioRetorno = data;
                    sessionStorage.setItem("usuario-autenticado", "1");
                    sessionStorage.setItem("email-usuario", usuarioRetorno.email);

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
                    this.mensagem = err.error;
                    console.log(err.error);
                }
            );

        /*if (this.usuario.email == "thiago@gmail.com" && this.usuario.senha == "abc123") {
            this.usuarioAutenticado = 1;

            sessionStorage.setItem("usuario-autenticado", "1");
            this.router.navigate([this.returnUrl]);
        }
        else {
            this.usuarioAutenticado = 2;
        }*/
    }

}
