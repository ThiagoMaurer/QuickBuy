import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


@Injectable({
    providedIn: "root",
})

export class GuardaRotas implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        var autenticado = localStorage.getItem("usuario-autenticado"); //1 == Usuario autenticado. 0 == Visitante, não autenticado.

        //caso usuario seja autenticado
        if (autenticado == "1") {
            return true;
        }

        //caso usuario não seja autenticado
        this.router.navigate(['/login'], { queryParams: {returnUrl:state.url}} );
        return false;

    }
    
}
