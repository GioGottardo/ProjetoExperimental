import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {PessoaService} from '../pessoa.service';
import {Pessoa } from '../pessoa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isCollapsed = false;

  public email = "";
  public senha = "";

  public pessoas : Pessoa[] = [];


  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {}

  public activeRoute(routename: string): boolean {
    console.log(this.router.url);
    return this.router.url.indexOf(routename) > -1;
  }

  public LogOn(){
    this.pessoaService.getPessoas().subscribe(
      res =>  {
        this.pessoas = res;});
        this.valida();
  }

  public valida(){
    var v = false;
    for(let pessoa of this.pessoas){
      if((pessoa.email == this.email) && (pessoa.senha == this.senha)){
        v=true;
        break;
      }
    }
    if(v){
      window.location.href = "\home";
    }
    else{
      alert("EMAIL OU SENHA INVALIDOS!");
    }
  }

}
