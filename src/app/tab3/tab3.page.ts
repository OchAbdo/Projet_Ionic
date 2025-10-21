import { Component, inject, OnInit } from '@angular/core';
/* import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone'; */
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Crecompte } from '../services/confcompte';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab3Page  {
  private ser = inject(Crecompte);
  public films: any;
  constructor() { }

 

  async ionViewWillEnter() {
    const user = await this.ser.getUserData();
    this.films = user.listfav;
  }



}
