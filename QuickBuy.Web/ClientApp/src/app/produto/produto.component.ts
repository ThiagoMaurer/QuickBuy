import { Component, OnInit } from "@angular/core"
import { ProdutoService } from "../services/produto/produto.service";
import { Produto } from "../model/produto";
import { Router } from "@angular/router";

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

    constructor(private produtoService: ProdutoService, private router: Router) {
        
    }

    ngOnInit(): void {
        var produtoSession = sessionStorage.getItem("produtoSession");

        if (produtoSession)
            this.produto = JSON.parse(produtoSession);
        else
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
        this.ativarEspera();
        this.produtoService.cadastrar(this.produto)
            .subscribe(
                produtoJSON => {
                    console.log(produtoJSON);
                    this.desativarEspera();
                    this.router.navigate(['pesquisar-produto']);
                },
                ex => {
                    console.log(ex.error);
                    this.mensagem = ex.error;
                    this.desativarEspera();
                }
            );
    }

    public ativarEspera() {
        this.ativar_spinner = true;
    }

    public desativarEspera() {
        this.ativar_spinner = false;
    }




}
