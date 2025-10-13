import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import{IonicModule} from '@ionic/angular';
import { Crecompte } from '../services/confcompte';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FirebaseS } from '../services/firebase-s';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.page.html',
  styleUrls: ['./adminuser.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminuserPage implements OnInit {

  private serauth = inject(Crecompte);
  private rt = inject(Router);
  private loadingCtrl = inject(LoadingController);
  private sevice = inject(FirebaseS);
  users: any[] = [];
  loading = true;

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




  async ngOnInit() {
    this.users = await this.sevice.getAllUsers();
    this.loading = false;
  }

}
