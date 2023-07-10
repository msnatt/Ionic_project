import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore} from '@angular/fire/firestore';
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
  constructor(private firestore: Firestore) { }

  loadAllData(): Observable<CustomerData[]> {
    const notesRef = collection(this.firestore, 'DataCollection');
    return collectionData(notesRef, { idField: 'id'}) as Observable<CustomerData[]>;
}
}
