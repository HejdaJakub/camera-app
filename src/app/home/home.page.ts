import {Component} from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  photo: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer, private httpClient: HttpClient) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    console.log(image)

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(String(image.dataUrl));

    console.log(this.photo)
  }
}
