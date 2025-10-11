import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import {IonicModule} from '@ionic/angular'

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResetpasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resetmotpass(f : NgForm){
    console.log(f.value);
  }

}
