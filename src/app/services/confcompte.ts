import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getIdToken, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class Crecompte {
  private auth = inject(Auth);
  private firestore = inject(Firestore) 

  async signup( userInfo : any , image:any ){

    const userCre = await createUserWithEmailAndPassword(
      this.auth,
      userInfo.email,
      userInfo.password
    );
  /* 
    await updateProfile(userCre.user, {
      displayName: `${userInfo.lastname} ${userInfo.firstname} ${userInfo.age}`,
      photoURL: image+"",
    }); */

    const userRef = doc(this.firestore, `users/${userCre.user.uid}`);
    await setDoc(userRef, {
      uid: userCre.user.uid,
      nom: userInfo.firstname,
      prenom: userInfo.lastname,
      age: userInfo.age,
      email: userInfo.email,
      image: userInfo.image+"",
      createdAt: new Date(),
    });

    return [userCre.user , true] ;
  }

   login(obj : any) {
    return signInWithEmailAndPassword(this.auth, obj.email, obj.password);
  }

  async logout() {
    await signOut(this.auth);
  }

  async getToken(): Promise<string | null> {
    const user = this.auth.currentUser;
    return user ? await getIdToken(user) : null;
  }

  async resetPassword(obj: any) {
      await sendPasswordResetEmail(this.auth, obj.email);
  }


}
