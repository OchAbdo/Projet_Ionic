import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor() { }
  navigat = inject(Router)



  
  authcleint(loginf : NgForm)
  { 
      if(loginf.valid){
        console.log(loginf.value)
      }
      else{
        console.log("n'est pas valid")
      }
      
  }

  ngOnInit() {
  }

}
