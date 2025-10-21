import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular'
import { ApiBack } from '../services/api-back';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.page.html',
  styleUrls: ['./addfilm.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddfilmPage implements OnInit {
   private serapi = inject(ApiBack)

  ngOnInit() {
  }


  



   addFilmbyuser(film : NgForm) {
    this.serapi.addFilm(film.value).subscribe({
      next: res => {console.log('Film ajouté:', res)
         
         film.reset();
      },
      error: err => console.error('Erreur:', err),
    });
  }
}
