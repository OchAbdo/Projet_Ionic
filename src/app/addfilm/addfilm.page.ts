import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular'

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.page.html',
  styleUrls: ['./addfilm.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddfilmPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
