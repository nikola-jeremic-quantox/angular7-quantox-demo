import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'Framework Battle 2019';

  constructor( private db: AngularFirestore ) {

  }

  ngOnInit() {
    // this.db.collection()
  }

}

