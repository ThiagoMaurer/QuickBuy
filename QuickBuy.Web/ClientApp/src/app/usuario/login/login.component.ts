import { Component, OnInit } from "@angular/core"
import { Usuario } from "../../model/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { timer } from 'rxjs';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"] //caso queira ter mais de um css, só colocar ["./style.css", "./main.css"]
})

export class LoginComponent implements OnInit { //relacionado ao ciclo de vida do componente, vai ser falado sobre mais tarde
    public usuario: Usuario;
    public usuarioAutenticado: number;
    public returnUrl: string;


    constructor(private router: Router, private activatedRouter: ActivatedRoute) {
        this.usuario = new Usuario();
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl']; //buscando o returnUrl definido no queryParams do guarda.rotas.ts
        this.usuario = new Usuario();
    }

    entrar(): void {
        if (this.usuario.email == "thiago@gmail.com" && this.usuario.senha == "abc123") {
            this.usuarioAutenticado = 1;

            sessionStorage.setItem("usuario-autenticado", "1");
            this.router.navigate([this.returnUrl]);
        }
        else {
            this.usuarioAutenticado = 2;
        }
    }

}
