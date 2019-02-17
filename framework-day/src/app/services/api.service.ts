import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ApiService {
	constructor(private db: AngularFirestore) {}

	getCollectionItems(collection) {
		return this.db
			.collection(collection)
			.snapshotChanges()
			.pipe(
				map(res => {
					const itemList = [];
					res.forEach(value => {
						const item = {
							id: value.payload.doc.id,
							...value.payload.doc.data()
						};
						itemList.push(item);
					});
					return itemList;
				})
			);
	}

	getDestination(id) {
    const endpoint = 'destinations/' + id;
		return this.db
      .doc(endpoint)
			.snapshotChanges()
			.pipe(
				map(res => {
          const item = {
            id: res.payload.id,
            ...res.payload.data()
          };
					return item;
				})
			);
	}

	postDestination(document) {
		const endpoint = 'destinations/';
		return /* ToDo */
	}
}
