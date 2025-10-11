import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import { IonicModule } from '@ionic/angular';
import { Photo } from '../services/photo';
import { image } from 'ionicons/icons';
import { Crecompte } from '../services/confcompte';

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
  photo: string | undefined;
  ngOnInit() {

  }
  async prendrephoto() {
    this.photo = await this.photoSer.takePicture()
  }



   async addUser(inscrption: NgForm) {
    try {

      const user = await this.logi.signup(inscrption.value , this.photo);
      console.log('Inscription réussie', user);
      //const token = await this.logi.getToken();
      //console.log(token);
      
    } catch (err) {
        console.error('Erreur', err);
    }
  } 

  

}
