import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from "@angular/router";
import { Autenticacao } from 'src/app/services/autenticacao.service';
import * as firebaseAuth from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuarioInvalido: boolean = false;
  public senhaVazia: boolean = false;
  public emailVazio: boolean = false;


 @Output() public exibirPainel: EventEmitter<string> = new EventEmitter()

 public formulario: FormGroup = new  FormGroup({
   'email': new FormControl(null),
   'senha': new FormControl(null)
})

  constructor(
    private autenticacao: Autenticacao,
    private router: Router
  ) { }

  ngOnInit() {
    this.autenticacao.removerAutenticacao();
  }

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro')
  }

  public autenticar(): void {
    this.senhaVazia = false;
    this.emailVazio = false;
    this.usuarioInvalido = false;

    if(this.formulario.value.email == undefined) {
      this.emailVazio = true;
      return;
    }

    if(this.formulario.value.senha == undefined) {
      this.senhaVazia = true;
      return;
    }


    this.autenticacao.autenticar(
      this.formulario.value.email,
      this.formulario.value.senha
    ).then((resposta: any) => {

      console.log('Resposta: ' + resposta)
      if(resposta === true){
        console.log('Mandar para o gestão')
        this.router.navigate(['/gestao'])
      }

      this.usuarioInvalido = true;

    });
  }
}
