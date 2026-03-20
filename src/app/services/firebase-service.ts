import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { inject } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firestore = inject(Firestore);

  // ================= BASE64 =================
  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject('Errore conversione base64');
    });
  }

  // ================= CAR =================
  addCar(car: any) {
    return addDoc(collection(this.firestore, 'cars'), car);
  }

  getCars(): Observable<any[]> {
    const ref = collection(this.firestore, 'cars');
    const q = query(ref);

    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

  updateCar(id: string, data: any) {
    return updateDoc(doc(this.firestore, `cars/${id}`), data);
  }

  deleteCar(id: string) {
    return deleteDoc(doc(this.firestore, `cars/${id}`));
  }

  // ================= HOUSE =================
  addHouse(house: any) {
    return addDoc(collection(this.firestore, 'houses'), house);
  }

  getHouses(): Observable<any[]> {
    return collectionData(collection(this.firestore, 'houses'), { idField: 'id' }) as Observable<
      any[]
    >;
  }

  updateHouse(id: string, data: any) {
    return updateDoc(doc(this.firestore, `houses/${id}`), data);
  }

  deleteHouse(id: string) {
    return deleteDoc(doc(this.firestore, `houses/${id}`));
  }
}
