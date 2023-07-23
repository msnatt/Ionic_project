import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

export interface CustomerData {
id?: string;
fullname: string;
ispostpaid: boolean;
price: number;
tel: string;

}

@Injectable({
providedIn: 'root'
})

export class HomeCrudService {

private _DB : any;
  CreateData: any;
  constructor(private firestore: Firestore) { }

  loadAllData(): Observable<CustomerData[]> {
    const notesRef = collection(this.firestore, 'DataCollection');
    return collectionData(notesRef, { idField: 'id'}) as Observable<CustomerData[]>;
  }
  createData(tmpObj: CustomerData) 
  {
    const notesRef = collection(this.firestore, 'DataCollection');

    return addDoc(notesRef, {
        fullname: tmpObj.fullname,
        price: tmpObj.price,
        tel: tmpObj.tel,
        ispostpaid: tmpObj.ispostpaid
    });
  }
  editData(tmpObj: CustomerData)
  {
    const noteRef = doc(this.firestore, 'DataCollection/'+tmpObj.id);

    return updateDoc(noteRef, {
      fullname: tmpObj.fullname,
      price: tmpObj.price,
      tel: tmpObj.tel,
      ispostpaid: tmpObj.ispostpaid
  });
    
  }
  deletedata(tmpObj: CustomerData) {
    const notesRef = doc(this.firestore, 'DataCollection/'+tmpObj.id);
    return deleteDoc(notesRef);
  }
}