import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConsultaComponent } from './app/pessoa/consulta/consulta.component';

import {CadastroComponent} from './app/pessoa/cadastro/cadastro.component';

import {CarrinhoComponent} from './app/pessoa/carrinho/carrinho.component';

import {LoginComponent} from './app/pessoa/login/login.component';

import { HomeComponent } from './app/home/home.component';

import { ComprasComponent } from './app/produto/compras/compras.component';


const appRoutes: Routes = [
    { path: 'home',                    component: HomeComponent },
    { path: '',                        component: HomeComponent },
    { path: 'consulta-pessoa',         component: ConsultaComponent },
    { path: 'cadastro-pessoa',         component: CadastroComponent },
    { path: 'cadastro-pessoa/:codigo', component: CadastroComponent },
    { path: 'carrinho-pessoa',         component: CarrinhoComponent },
    { path: 'login-pessoa',            component: LoginComponent },
    { path: 'compras',                component: ComprasComponent }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
