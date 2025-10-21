import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getIdToken, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc, updateDoc  } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class Crecompte {
  private auth = inject(Auth);
  private firestore = inject(Firestore) 

  async changeetat(uid : string , dis : boolean){
    const userref = doc(this.firestore , `users/${uid}`);
    await updateDoc(userref , {
      disabled : dis ,
    })
  }

  async updatefilms(uid : string , films : any){
    const userref = doc(this.firestore , `users/${uid}`);
    await updateDoc(userref , {
      listfav : films ,
    })
  }

  

   getuid() : any {
    return this.auth.currentUser?.uid ;
  }


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
      image: image,
      role : "user",
      disabled : false ,
      listfav: [],
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

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      onAuthStateChanged(this.auth, (user) => {
        if(user == null)
          resolve(false);
        else
          resolve(true); // true si user existe, false sinon
      });
    });
  }

  async getUserData(): Promise<any | null> {
    const user =  this.auth.currentUser; // récupère le user Firebase connecté
    if (!user) return null;
    
    const docRef =  doc(this.firestore, 'users', user.uid);
    const snap = await getDoc(docRef);

    

    if (snap.exists()) {
      return snap.data(); 
    }
    return null; 
  }


 


  isAdmin(): Promise<boolean>{
    return new Promise(async (rslt) =>{
      const user = await this.getUserData();
      
      if( user.role == "admin")
        rslt(true);
      else
        rslt(false) ;
      })
  }

  isUser(): Promise<boolean>{
    return new Promise(async (rslt) =>{
      const user = await this.getUserData();
      if( user.role =="user")
        rslt(true);
      else
        rslt(false) ;
      })
  }



}
