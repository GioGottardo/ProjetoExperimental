import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import {Produto} from './produto';
import {ConfigProtudoService} from './config.service';

@Injectable()
export class ProdutoService {

    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http: Http,
                private configService: ConfigProtudoService) {

        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/produto/';

        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS PESSOAS CADASTRADAS */
    getProdutos(){
        return this.http.get(this.baseUrlService).map(res => res.json());
    }

    /**ADICIONA UMA NOVA PESSOA */
    addProduto(produto: Produto){

        return this.http.post(this.baseUrlService, JSON.stringify(produto),this.options)
        .map(res => res.json());
    }
    /**EXCLUI UMA PESSOA */
    excluirProduto(codigo:number){

        return this.http.delete(this.baseUrlService + codigo).map(res => res.json());
    }

    /**CONSULTA UMA PESSOA PELO CÓDIGO */
    getProduto(codigo:number){

        return this.http.get(this.baseUrlService + codigo).map(res => res.json());
    }

    /**ATUALIZA INFORMAÇÕES DA PESSOA */
    atualizarProduto(produto:Produto){

        return this.http.put(this.baseUrlService, JSON.stringify(produto),this.options)
        .map(res => res.json());
    }

}
