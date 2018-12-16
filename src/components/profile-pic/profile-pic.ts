import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from "ionic-angular";

/**
 * Generated class for the ProfilePicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-pic',
  templateUrl: 'profile-pic.html'
})
export class ProfilePicComponent {

  text: string;

  image: string;

  constructor(private camera: Camera, private alertCtrl: AlertController, private nativeStorage: NativeStorage,
              private _DomSanitizer: DomSanitizer, public loadingCtrl: LoadingController) {
    this.updateFoto();
  }

  loading = this.loadingCtrl.create({
    content: 'Aguarde...'
  });

  insertLoading() {

    this.loading.present();
  }

  removeLoading(){
    this.loading.dismissAll();
  }

  async pictureFromCamera(sourceType: number) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      sourceType: sourceType
    };

    this.tiraFoto(options);
  }

  selectSource() {
    let alert = this.alertCtrl.create({
      title: 'Alterar Foto',
      buttons: [
        {
          text: 'Tirar foto',
          role: 'destructive',
          handler: () => {
            this.pictureFromCamera(1);
          }
        },
        {
          text: 'Galeria',
          handler: () => {
            this.pictureFromCamera(0);
          }
        },
      ]
    });
    alert.present();
  }

  updateFoto(){
    this.insertLoading();
    this.nativeStorage.getItem('foto')
      .then(
        data => {this.image = 'data:image/jpeg;base64, ' + data.uri; this.removeLoading()},
        error => console.error(error)
      );
  }

  async tiraFoto(options: CameraOptions) {
    try {
      this.insertLoading();
      const result = await this.camera.getPicture(options);
      this.nativeStorage.setItem('foto', {uri: result})
        .then(
          () => {this.removeLoading(); this.updateFoto()},
          error => console.error('Error storing item', error)
        );
    }
    catch (e) {
      console.error(e);
    }
  }



}
