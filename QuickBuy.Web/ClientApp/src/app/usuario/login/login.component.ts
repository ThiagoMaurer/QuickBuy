import { Component } from "@angular/core"
import { Usuario } from "../../model/usuario";
import { Router } from "@angular/router";
import { timer } from 'rxjs';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"] //caso queira ter mais de um css, só colocar ["./style.css", "./main.css"]
})

export class LoginComponent {
    public usuario: Usuario;
    public usuarioAutenticado: number;


    constructor(private router: Router) {
        this.usuario = new Usuario();
    }

    entrar(): void {
        if (this.usuario.email == "thiago@gmail.com" && this.usuario.senha == "abc123") {
            this.usuarioAutenticado = 1;

            localStorage.setItem("usuario-autenticado", "1");
            this.router.navigate(['/']);
        }
        else {
            this.usuarioAutenticado = 2;
        }
    }

}
