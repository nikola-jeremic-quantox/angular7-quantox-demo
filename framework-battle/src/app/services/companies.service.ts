import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class CompanyService {

  constructor(
    private db: AngularFirestore, 
    ) { }

  getCompanyList() {
    return this.db.collection('companies').snapshotChanges().pipe(
      map( res => {
        const companyList = [];
        res.forEach( value => {
          const company = { id: value.payload.doc.id, ...value.payload.doc.data() }
          companyList.push(company);
        })
        return companyList;
      })
    );
  }

  getUserList(companyId?) {
    if(companyId) {
      return this.db
        .doc('companies/' + companyId)
        .collection('employees').snapshotChanges().pipe(
          map( res => {
            const userList = [];
            res.forEach( value => {
              const user = { id: value.payload.doc.id, ...value.payload.doc.data() }
              userList.push(user);
            })
            return userList;
          })
        );
      }
   }

}
