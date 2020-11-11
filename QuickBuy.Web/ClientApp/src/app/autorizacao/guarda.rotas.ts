import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsuarioService } from "../services/usuario/usuario.service";


@Injectable({
    providedIn: "root",
})

export class GuardaRotas implements CanActivate {

    constructor(private router: Router, private usuarioService: UsuarioService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.usuarioService.usuario_autenticado()) {
            return true;
        }

        //caso usuario não esteja logado
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //esse router.navigate além de levar pra página de login, injeta uma querystring na URL. essa querystring tem a informação de que página o usuário
        //tentou acessar antes de logar. Com isso, assim que o usuário logar, ele vai ser redirecionado pra página que tentou acessar e não conseguiu pois
        //ainda não estava logado. pra entender melhor, coloca um alert(state.url); acima do router navigate.

        return false;

    }
    
}
