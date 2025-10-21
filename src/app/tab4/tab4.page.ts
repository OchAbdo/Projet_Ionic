import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone'; */
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Auth, getAuth, signOut } from '@angular/fire/auth';
import { Crecompte } from '../services/confcompte';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {

  private ser = inject(Crecompte);

   public user : any ;
   favoritesCount = 0;


  constructor(private auth: Auth, private router: Router) {}

   ngOnInit() {
    this.editProfile();
    console.log(this.user);
    
  }

  async editProfile() {
     this.user = await this.ser.getUserData() ;
  }


  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['/login']);
    });
  }

}
