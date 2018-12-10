import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';
import { CartaoFormComponent } from "../../components/cartao-form/cartao-form";

@NgModule({
  declarations: [
    CadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
    CartaoFormComponent
  ],
})
export class CadastroPageModule {}
