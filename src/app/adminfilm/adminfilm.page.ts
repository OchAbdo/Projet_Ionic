import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import{IonicModule} from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiBack } from '../services/api-back';

@Component({
  selector: 'app-adminfilm',
  templateUrl: './adminfilm.page.html',
  styleUrls: ['./adminfilm.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminfilmPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadFilms();
  }

  private rout = inject(Router);
  private serapi = inject(ApiBack)
  films: any[] = [];

  navigateAdd(){
      this.rout.navigateByUrl("/addfilm")
  }

   loadFilms() {
    this.serapi.getAllFilms().subscribe({
      next: (res) => {
        this.films = res;
        //console.log('Films chargés:', res);
      },
      error: (err) => {
        console.error('Erreur de chargement des films:', err);
      },
    });
  }

}
