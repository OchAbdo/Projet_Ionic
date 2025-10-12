import { Component, inject } from '@angular/core';
/* import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone'; */
import {IonicModule} from '@ionic/angular'
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Crecompte } from '../services/confcompte';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule , ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {}

  private serauth = inject(Crecompte);
  private rt = inject(Router);
  private loadingCtrl = inject(LoadingController);

  async deconnecter(){
    const loading = await this.loadingCtrl.create({
      message: 'Décoonection...',
      spinner: 'crescent',
    });
    await loading.present();
    try {
      await this.serauth.logout();
      //const token = await this.serauth.getToken();
      //console.log(token);

      this.rt.navigateByUrl("/login");


    } catch (err) {
      console.error('Erreur', err);
    }
    finally {
      loading.dismiss();
    }
  }

}
