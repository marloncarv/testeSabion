import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule} from "ionic-angular";
import { CartaoFormComponent } from './cartao-form/cartao-form';
import { ProfilePicComponent } from './profile-pic/profile-pic';

@NgModule({
	declarations: [CartaoFormComponent,
    ProfilePicComponent],
	imports: [IonicPageModule.forChild(CartaoFormComponent)],
	exports: [CartaoFormComponent,
    ProfilePicComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
