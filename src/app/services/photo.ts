import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class Photo {
  
   async takePicture() {
        let capturedPHoto = await Camera.getPhoto(
            {
                source : CameraSource.Camera,
                quality : 90,
                resultType : CameraResultType.DataUrl
            }
        );
        return capturedPHoto.dataUrl;
        
    }
}
