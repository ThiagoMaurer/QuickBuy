import { Component, OnInit } from "@angular/core"
import { ProdutoService } from "../services/produto/produto.service";
import { Produto } from "../model/produto";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]
})

//Variaveis e funções = camelCase
//Classes = PascalCase

//Export é tipo um public do C# (tem algumas diferenças). Assim ela pode ser acessada por outros componentes. 
export class ProdutoComponent implements OnInit { 
    public produto: Produto;

    constructor(private produtoService: ProdutoService) {
        
    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

    public cadastrar(): void {
        this.produtoService.cadastrar(this.produto)
            .subscribe(
                produtoJSON => {
                    alert(produtoJSON);
                },
                ex => {
                    alert(ex.error);  
                }
            );
    }




}
