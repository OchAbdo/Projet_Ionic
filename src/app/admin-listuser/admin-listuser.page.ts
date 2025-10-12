import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin-listuser',
  templateUrl: './admin-listuser.page.html',
  styleUrls: ['./admin-listuser.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AdminListuserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
