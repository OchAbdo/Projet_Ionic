import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import { IonicModule } from '@ionic/angular';
import { Photo } from '../services/photo';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SignupPage implements OnInit {

  private photoSer = inject(Photo); 
  photo : string | undefined;
  ngOnInit() {
    
  }

  async prendrephoto(){
   this.photo = await this.photoSer.takePicture()
  }

  addUser(inscrption : NgForm)
  {
    console.log(inscrption.value);
  }

}
