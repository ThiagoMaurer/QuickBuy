import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../../model/pedido";

@Injectable({
    providedIn: "root"
})

export class PedidoService {
    public _baseUrl: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    //criando uma propriedade chamada headers pra não ter que escrever a mesma coisa em todo método
    get headers(): HttpHeaders {
        return new HttpHeaders().set("content-type", "application/json");
    }

    public efetivarCompra(pedido: Pedido): Observable<number> {
        return this.http.post<number>(this._baseUrl + "api/pedido", JSON.stringify(pedido), { headers: this.headers });
    }
}
