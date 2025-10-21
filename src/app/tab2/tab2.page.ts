import { Component, inject, OnInit } from '@angular/core';
/* import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone'; */
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ApiBack } from '../services/api-back';
import { Crecompte } from '../services/confcompte';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page implements OnInit {

  private ser = inject(Crecompte);

  constructor() { }

  async ngOnInit() {
    this.loadFilms();
    const us = await this.ser.getUserData();
    this.favoriteFilms = us.listfav;
  }

  private serapi = inject(ApiBack)
  films: any[] = [];

  ionViewWillEnter() {
    this.loadFilms();
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

  verif(film : any){
    const f =  this.favoriteFilms.findIndex(w => w.id == film.id) 
    if(f ==-1)
      return false ;

    return true ;
  }


  favoriteFilms: any[] = [];

  toggleFavorite(film: any) {
    const ff = this.favoriteFilms.findIndex(f => f.id == film.id);
    if (ff == -1)
      film.isFavorite = true
    else
      film.isFavorite = false;


    if (film.isFavorite) {
      this.favoriteFilms.push(film);
      const uid = this.ser.getuid();
      this.ser.updatefilms(uid, this.favoriteFilms);

    } else {
      this.favoriteFilms = this.favoriteFilms.filter(f => f.id !== film.id);
      const uid = this.ser.getuid();
      this.ser.updatefilms(uid, this.favoriteFilms);
    }

    //console.log('Favoris actuels :', this.favoriteFilms);
  }

}
