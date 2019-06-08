import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore'
import {Admininfo} from './admininfo'

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  nanniesCollection: AngularFirestoreCollection<Admininfo>
  nannyDoc: AngularFirestoreDocument<Admininfo>

  constructor(private afs: AngularFirestore) { 
    this.nanniesCollection = this.afs.collection('nanny', ref =>
      ref.orderBy('name', 'desc'))
  }


  getNanny() {
    return this.nanniesCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Admininfo
        const name = a.payload.doc.id
        return { name, ...data}
      })
    })
  }
}

