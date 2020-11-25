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
    public arquivoSelecionado: File;
    public ativar_spinner: boolean;
    public mensagem: string;

    constructor(private produtoService: ProdutoService) {
        
    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

    public inputChange(files: FileList) {
        this.ativar_spinner = true;
        this.arquivoSelecionado = files.item(0);
        this.produtoService.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    this.ativar_spinner = false;
                },
                ex => {
                    console.log(ex.error);
                    this.mensagem = ex.error;
                    this.ativar_spinner = false;
                }
            );
    }

    public cadastrar(): void {
        this.produtoService.cadastrar(this.produto)
            .subscribe(
                produtoJSON => {
                    console.log(produtoJSON);
                },
                ex => {
                    console.log(ex.error);
                    this.mensagem = ex.error;
                }
            );
    }




}
