import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import{IonicModule} from '@ionic/angular';
import { Router } from '@angular/router';

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
  }

  private rout = inject(Router);

  navigateAdd(){
      this.rout.navigateByUrl("/admin-listuser/addfilm")
  }

}
