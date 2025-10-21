import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import { IonicModule } from '@ionic/angular'
import { Crecompte } from '../services/confcompte';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResetpasswordPage implements OnInit {

  constructor() { }

  private serauth = inject(Crecompte);
  private loadingCtrl = inject(LoadingController);
  private alertController = inject(AlertController);


  ngOnInit() {
  }

  async resetmotpass(f: NgForm) {

    const loading = await this.loadingCtrl.create({
      message: 'Envoyer mail...',
      spinner: 'crescent',
    });


    await loading.present();
    try {
      const user = await this.serauth.resetPassword(f.value);
      //console.log('Inscription réussie', user);
      //const token = await this.logi.getToken();
      //console.log(token);

      //this.rt.navigateByUrl("/tabs/tab1");
      f.reset();

      const alert = await this.alertController.create({
        header: 'Info',
        message: 'Vérifier Ton Email',
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
          },
        ],
      });
      await alert.present();

    } catch (err) {
      //console.error('Erreur', err);

      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Email incorrect',
        buttons: [
          {
            text: 'OK',
            role: 'cancel',
          },
        ],
      });

      await alert.present();
    }
    finally {
      loading.dismiss();
    }

  }

}
