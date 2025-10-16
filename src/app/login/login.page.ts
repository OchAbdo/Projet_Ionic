import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'
import { Crecompte } from '../services/confcompte';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor() { }
  private navigat = inject(Router)
  private auth = inject(Crecompte);
  private loadingCtrl = inject(LoadingController);
  private alertController = inject(AlertController);
 private authtt = inject(Auth);




  async authclient(loginf: NgForm) {
    const loading = await this.loadingCtrl.create({
      message: 'Connection...',
      spinner: 'crescent',
    });
    await loading.present();
    try {
      const user = await this.auth.login(loginf.value);

      
      /* console.log('conccection réussie', user);
      const token = await this.auth.getToken();
      console.log(token); */
      const tf = await this.auth.isAdmin();
      //console.log(tf);
      const token = await this.authtt.currentUser?.getIdToken();
      console.log(token);
      
       this.authtt
      if(!tf)
        this.navigat.navigateByUrl("/tabs/tab1");
      else
        this.navigat.navigateByUrl("/admin-listuser/adminuser");

    } catch (err) {
      //console.error('connection invalide', err);

      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Email ou mot de passe incorrect.',
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

  ngOnInit() {
  }

}
