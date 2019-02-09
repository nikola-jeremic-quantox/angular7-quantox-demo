import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore'

const firebaseModules = [
  AngularFirestoreModule
];

@NgModule({
  imports: [ AngularFireModule.initializeApp(environment.firebase), ...firebaseModules ],
  exports: [ AngularFireModule, ...firebaseModules ]
})

export class FirebaseModule { }
