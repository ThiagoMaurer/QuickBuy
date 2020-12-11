import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "./loja.compra.realizada.component.html"
})

export class LojaCompraRealizadaComponent implements OnInit {
    public idPedido: string;

    ngOnInit(): void {
        this.idPedido = sessionStorage.getItem("idPedido");
    }
}
