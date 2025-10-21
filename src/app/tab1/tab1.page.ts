import { Component, inject, OnInit } from '@angular/core';
/* import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone'; */
import {IonicModule} from '@ionic/angular'
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Crecompte } from '../services/confcompte';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Matching } from '../services/matching';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonicModule , ExploreContainerComponent],
})
export class Tab1Page implements OnInit {
  constructor() {}

  private serauth = inject(Crecompte);
  private rt = inject(Router);
  private loadingCtrl = inject(LoadingController);
  private match = inject(Matching)
  listm : any ;

  async ngOnInit() {
    this.match.calculateAndSaveMatches();
    const us = await this.match.getUserMatches();
    this.listm = us ;
  }


 async ionViewWillEnter() {
    const loading = await this.loadingCtrl.create({
      message: 'Chargement des données...',
      spinner: 'crescent', // tu peux mettre aussi 'lines', 'dots', etc.
      translucent: true,
    });

    await loading.present();

    try {
      await this.match.calculateAndSaveMatches();
      const us = await this.match.getUserMatches();
      this.listm = us;
    } catch (error) {
      console.error('Erreur lors du chargement :', error);
    } finally {
      loading.dismiss();
    }
  }








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
