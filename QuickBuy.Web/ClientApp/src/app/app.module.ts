import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Components que vieram com a criação do projeto
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

//Etc
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { PesquisaProdutoComponent } from './produto/pesquisa/pesquisa.produto.component';

//Services (injectables)
import { UsuarioService } from './services/usuario/usuario.service';
import { ProdutoService } from './services/produto/produto.service';

//Components
import { LoginComponent } from './usuario/login/login.component';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro.usuario.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ProdutoComponent,
        LoginComponent,
        CadastroUsuarioComponent,
        PesquisaProdutoComponent
    ],
    imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'produto', component: ProdutoComponent, /*canActivate: [GuardaRotas]*/ },
        { path: 'login', component: LoginComponent },
        { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
        { path: 'pesquisar-produto', component: PesquisaProdutoComponent },
    ])
    ],
    providers: [UsuarioService, ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
