import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CartaoFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cartao-form',
  templateUrl: 'cartao-form.html'
})
export class CartaoFormComponent {

  formgroup: FormGroup;
  nome: AbstractControl;
  sobrenome: AbstractControl;
  endereco: AbstractControl;
  numero: AbstractControl;
  complemento: AbstractControl;
  cep: AbstractControl;
  cidade: AbstractControl;
  uf: AbstractControl;
  telComercial: AbstractControl;
  telCelular: AbstractControl;
  email: AbstractControl;
  submitted: boolean = false;

  constructor(public formbuilder: FormBuilder,
              private alertCtrl: AlertController) {

    this.setValidationConfig();

  }

  setValidationConfig(){
    this.formgroup = this.formbuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      cep: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ])],
      cidade: ['', Validators.required],
      uf: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ])],
      telComercial: ['', Validators.compose([
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(15)
      ])],
      telCelular: [''],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])]
    });

    this.nome = this.formgroup.controls['nome'];
    this.sobrenome = this.formgroup.controls['sobrenome'];
    this.endereco = this.formgroup.controls['endereco'];
    this.numero = this.formgroup.controls['numero'];
    this.complemento = this.formgroup.controls['complemento'];
    this.cep = this.formgroup.controls['cep'];
    this.cidade = this.formgroup.controls['cidade'];
    this.uf = this.formgroup.controls['uf'];
    this.telComercial = this.formgroup.controls['telComercial'];
    this.telCelular = this.formgroup.controls['telCelular'];
    this.email = this.formgroup.controls['email'];
  }

  presentAlert(title, subtitle) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  validateForm(){
    this.submitted = true;
    if(this.formgroup.valid){
      this.presentAlert('Sucesso!', 'Cadastro realizado com sucesso.')
    }else{
      this.presentAlert('Erro', 'Preencha o formulário corretamente.')
    }
  }


}
