import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ApiService {

  constructor(
    private db: AngularFirestore, 
    ) { }

  getCollectionItems(collection) {
    return this.db.collection(collection).snapshotChanges().pipe(
      map( res => {
        const itemList = [];
        res.forEach( value => {
          const item = { id: value.payload.doc.id, ...value.payload.doc.data() }
          itemList.push(item);
        })
        return itemList;
      })
    );
  }

  // getCollectionItems(countryId?) {
  //   if(countryId) {
  //     return this.db
  //       .doc('countries/' + countryId)
  //       .collection('destinations').snapshotChanges().pipe(
  //         map( res => {
  //           const destinationList = [];
  //           res.forEach( value => {
  //             const user = { id: value.payload.doc.id, ...value.payload.doc.data() }
  //             destinationList.push(user);
  //           })
  //           return destinationList;
  //         })
  //       );
  //     }
  //  }

}
