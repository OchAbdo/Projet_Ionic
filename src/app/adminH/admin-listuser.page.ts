import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import {IonicModule} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-listuser',
  templateUrl: './admin-listuser.page.html',
  styleUrls: ['./admin-listuser.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminListuserPage implements OnInit {

  constructor() { }

  segmentValue = 'films';

  private rout = inject(Router)

 segmentChanged(event: any) {
    const value = event.detail.value;
    this.segmentValue = value;

    // Navigation selon le segment sélectionné
    if (value === 'films') {
      this.rout.navigate(['/adminfilm']);
    } else if (value === 'utilisateurs') {
      this.rout.navigate(['/adminuser']);
    }
  }

  ngOnInit() {
  }

}
