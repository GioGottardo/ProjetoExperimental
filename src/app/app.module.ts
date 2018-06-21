import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConsultaComponent } from './pessoa/consulta/consulta.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { CarrinhoComponent } from './pessoa/carrinho/carrinho.component';
import { LoginComponent } from './pessoa/login/login.component';
import { ComprasComponent } from './produto/compras/compras.component';

import {routing} from './../app.routes';

import { ConfigService } from './pessoa/config.service';
import { PessoaService } from './pessoa/pessoa.service';
import { ProdutoService } from './produto/produto.service';
import { ConfigProtudoService } from './produto/config.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent,
    CarrinhoComponent,
    LoginComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule

  ],
  providers: [
    ConfigService,
    PessoaService,
    ProdutoService,
    ConfigProtudoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
