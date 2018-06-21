import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {PessoaService} from '../pessoa.service';

import {Pessoa} from '../pessoa';

import {Response} from '../response';

@Component({
    selector: 'app-carrinho-pessoa',
    templateUrl: './carrinho.component.html',
    styleUrls:["./carrinho.component.css"]
  })
  export class CarrinhoComponent implements OnInit {

    private pessoas: Pessoa[] = new Array();
    private titulo:string;

    constructor(private pessoaService: PessoaService,
                private router: Router){}

    ngOnInit() {

      /*SETA O TÍTULO */
      this.titulo = "Registros Cadastrados";

      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      this.pessoaService.getPessoas().subscribe(res => this.pessoas = res);
    }

    /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA
     * LINHA DA TABELA*/
    excluir(codigo:number, index:number):void {

      if(confirm("Deseja realmente excluir esse registro?")){

        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.pessoaService.excluirPessoa(codigo).subscribe(response => {

              /**PEGA O RESPONSE DO SERVIÇO */
              let res:Response = <Response>response;

              /*1 = SUCESSO
              * MOSTRAMOS A MENSAGEM RETORNADA PELO SERVIÇO E DEPOIS REMOVEMOS
              O REGISTRO DA TABELA HTML*/
              if(res.codigo == 1){
                alert(res.mensagem);
                this.pessoas.splice(index,1);
              }
              else{
                /*0 = EXCEPTION GERADA NO SERVIÇO JAVA */
                alert(res.mensagem);
              }
          },
          (erro) => {
               /*MOSTRA ERROS NÃO TRATADOS */
               alert(erro);
          });
      }

    }



  }
