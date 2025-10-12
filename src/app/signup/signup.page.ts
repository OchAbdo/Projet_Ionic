import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import { IonicModule } from '@ionic/angular';
import { Photo } from '../services/photo';
import { LoadingController } from '@ionic/angular';
import { Crecompte } from '../services/confcompte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  private photoSer = inject(Photo);
  private logi = inject(Crecompte);
  private rt = inject(Router);
  private loadingCtrl = inject(LoadingController);
  photo: string | undefined;
  ngOnInit() {

  }
  async prendrephoto() {
    this.photo = await this.photoSer.takePicture()
  }



  async addUser(inscrption: NgForm) {

    const loading = await this.loadingCtrl.create({
      message: 'Création du compte...',
      spinner: 'crescent',
    });
    await loading.present();
    try {
      const user = await this.logi.signup(inscrption.value, this.photo);
      //console.log('Inscription réussie', user);
      //const token = await this.logi.getToken();
      //console.log(token);

      this.rt.navigateByUrl("/tabs/tab1");


    } catch (err) {
      console.error('Erreur', err);
    }
    finally {
      loading.dismiss();
    }
  }



}
