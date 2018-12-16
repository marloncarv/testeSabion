import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrMaskerModule } from 'brmasker-ionic-3';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { CadastroPage } from '../pages/cadastro/cadastro';

import { CartaoFormComponent } from "../components/cartao-form/cartao-form";
import { ProfilePicComponent } from "../components/profile-pic/profile-pic";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    CadastroPage,
    CartaoFormComponent,
    ProfilePicComponent
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    NativeStorage
  ]
})
export class AppModule {}
