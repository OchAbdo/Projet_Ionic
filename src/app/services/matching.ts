import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collection, doc, Firestore, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';

interface UserData {
  id: string;
  nom?: string;
  listfav?: any[];
  matches?: any[];
}


@Injectable({
  providedIn: 'root'
})
export class Matching {

  constructor(private firestore: Firestore, private auth: Auth) { }

  async calculateAndSaveMatches() {
    const user = this.auth.currentUser;
    if (!user) {
      console.error('Aucun utilisateur connecté.');
      return;
    }

    const currentUserRef = doc(this.firestore, 'users', user.uid);
    const currentSnap = await getDoc(currentUserRef);

    if (!currentSnap.exists()) {
      console.error('Utilisateur introuvable dans Firestore.');
      return;
    }

    const currentData = currentSnap.data() as UserData;
    const currentFavs = currentData?.listfav || [];

    // Charger tous les utilisateurs
    const usersCollection = collection(this.firestore, 'users');
    const snapshot = await getDocs(usersCollection);
    const allUsers: UserData[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as any)
    }));
    //console.log(allUsers);

    const matches: any[] = [];

    for (const other of allUsers) {
      if (other.id === user.uid) continue; // ignorer soi-même
      const favs2 = other.listfav || [];


      // calcul du taux de similarité
      const intersection = currentFavs.filter(f1 => favs2.some(f2 => f1.id === f2.id));
      //console.log(intersection);

      const union = [...currentFavs];

      favs2.forEach(f => {
        if (!union.some(u => u.id === f.id)) {
          union.push(f);
        }
      });
      const matchRate = (intersection.length / union.length) * 100;



      //console.log(intersection);
      //console.log(union);
      console.log(matchRate);
      if (matchRate >= 75) {

        matches.push({
          uid: other.id,
          name: other.nom || 'Utilisateur',
          rate: +matchRate.toFixed(1),
          common: intersection
        });
      }
    }

    // Enregistrer la liste des matches dans Firestore
    try {
      await updateDoc(currentUserRef, { matches });
      //console.log('Liste des correspondances mise à jour avec succès.');
    } catch (error) {
      // Si le doc n’existe pas encore, le créer
      await setDoc(currentUserRef, { matches }, { merge: true });
      //console.warn('Document créé avec le champ matches.');
    }
  }

  async getUserMatches() : Promise<any | null>  {
    const user = this.auth.currentUser;
    if (!user) return [];

    const currentUserRef = doc(this.firestore, 'users', user.uid);
    const snap = await getDoc(currentUserRef);

    if (!snap.exists()) return [];

    const data = snap.data() as UserData;
    return data.matches ;
  }




}
