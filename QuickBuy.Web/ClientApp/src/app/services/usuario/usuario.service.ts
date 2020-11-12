import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario";

@Injectable({
    providedIn: "root",
})

export class UsuarioService { //ignorar tracejado 

    private baseURL: string; //ali no constructor, esse baseURL recebe a injeção da Url atual. é uma responsividade ainda maior do que o Url Action do C#/Razor
    private _usuario: Usuario;

    set usuario(usuario: Usuario) {
        sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
        this._usuario = usuario;
    }

    get usuario(): Usuario {
        let usuario_json = sessionStorage.getItem("usuario-autenticado");
        this._usuario = JSON.parse(usuario_json);
        return this._usuario;
    }

    public usuario_autenticado(): boolean {
        return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
    }

    public limpar_sessao() {
        sessionStorage.setItem("usuario-autenticado", "");
        this._usuario = null;
    }

    constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) { //nesse construtor, estamos fazendo injeções de dependência com o Angular
        this.baseURL = baseUrl;
    }

    public verificarUsuario(usuario: Usuario): Observable<Usuario> { //retornar um Observable retornar uma mudança de estado

        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body = {
            email: usuario.email,
            senha: usuario.senha
        }


        //como dito anteriormente, o base.URL recebe a URL atual. num projeto local, vai receber localhost alguma coisa, num projeto publicado, vai receber http://www.quickbuy.com ou algo do tipo
        return this.http.post<Usuario>(this.baseURL + "api/usuario/VerificarUsuario", body, { headers });
    }
    
}



