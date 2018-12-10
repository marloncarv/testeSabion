import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule} from "ionic-angular";
import { CartaoFormComponent } from './components/cartao-form/cartao-form';

@NgModule({
	declarations: [CartaoFormComponent],
	imports: [IonicPageModule.forChild(CartaoFormComponent)],
	exports: [CartaoFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
