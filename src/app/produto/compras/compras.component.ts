import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {ProdutoService} from '../produto.service';

import {Produto} from '../produto';

import {Response} from '../response';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-produto-compras',
    templateUrl: './compras.component.html',
    styleUrls:["./compras.component.css"]
  })
  export class ComprasComponent implements OnInit {

    private titulo:string;
    private produto:Produto = new Produto();

    constructor(private produtoService: ProdutoService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}

    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {

      this.activatedRoute.params.subscribe(parametro=>{

        if(parametro["codigo"] == undefined){

          this.titulo = "Compre seu Produto";
        }
        else{

          this.titulo = "Editar Cadastro de Produto";
          this.produtoService.getProduto(Number(parametro["codigo"])).subscribe(res => this.produto = res);
        }


      });
    }



    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar():void {

      /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
      if(this.produto.codigo == undefined){

        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
        this.produtoService.addProduto(this.produto).subscribe(response => {

           //PEGA O RESPONSE DO RETORNO DO SERVIÇO
           let res:Response = <Response>response;

           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if(res.codigo == 1){
            alert(res.mensagem);
            this.produto = new Produto();
           }
           else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
            alert(erro);
         });

      }
      else{

        /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
        this.produtoService.atualizarProduto(this.produto).subscribe(response => {

        //PEGA O RESPONSE DO RETORNO DO SERVIÇO
        let res:Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
        if(res.codigo == 1){
          alert(res.mensagem);
          this.router.navigate(['/compras']);
        }
         else{
          /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
          NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
          EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */
          alert(erro);
       });
      }

    }

  }
