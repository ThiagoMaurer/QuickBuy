import { Component } from "@angular/core"

@Component({
    selector: "app-produto",
    template: "<html><body>Testamndo: {{ obterNome() }}</body></html>"
})

//Variaveis e funções = camelCase
//Classes = PascalCase

//Export é tipo um public do C# (tem algumas diferenças). Assim ela pode ser acessada por outros componentes. 
export class ProdutoComponent { 
    public id: number;
    public nome: string;
    public preco: number;
    public liberadoParaVenda: boolean;

    public obterNome(): string {
        return "Samsung";
    }

}
