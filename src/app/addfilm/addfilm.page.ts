import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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

   addFilm() {
    this.serapi.addFilm({ title: 'Inception' }).subscribe({
      next: res => console.log('Film ajouté:', res),
      error: err => console.error('Erreur:', err),
    });
  }
}
