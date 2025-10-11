import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import {IonicModule} from '@ionic/angular'
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule , RouterLink]
})
export class HomePage implements OnInit {

 nav = inject(Router);
  constructor() {}
  ngOnInit(){
  }

  navigationAuth()
  {
    this.nav.navigateByUrl('/login');
  }

}
