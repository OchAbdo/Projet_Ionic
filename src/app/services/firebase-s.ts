import { inject, Injectable } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseS {
    private firestore = inject(Firestore);

    async getAllUsers(): Promise<any[]> {
    const usersCollection = collection(this.firestore, 'users');
    const snapshot = await getDocs(usersCollection);

    const users: any[] = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    return users;
  }
  
}
