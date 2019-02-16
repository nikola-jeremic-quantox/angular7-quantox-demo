import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-destinations',
	templateUrl: './destinations.component.html',
	styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
	chosenId: string | number;
	destinations: any;
	chosenCategory: string;

	activatedId$ = this.sharedService.activatedId;


	displayedColumns: string[] = [
		'select',
		'id',
		'name',
		'region',
		'country',
		'category',
		'stars'
	];

	dataSource;
	selection = new SelectionModel(true, []);
	searchInput = new FormControl('');
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(
		private sharedService: SharedService,
		private apiService: ApiService
	) {}

	ngOnInit() {
		this.openSubsriptions();
	}

	getCategory() {
		this.sharedService.chosenCategory.subscribe(
			res => (this.chosenCategory = res),
			error => console.log('Error: ', error)
		);
	}
	openSubsriptions() {
		this.apiService.getCollectionItems('destinations').subscribe(res => {
			this.destinations = res;
			this.generateTable(res);
		});
	}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  onMasterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

	returnTableBody(element, path) {
		const splited = (path && path.split('/')) || [];
		const path0 = element[splited[0]];
		const path1 = path0 && path0[splited[1]];
		const path2 = path1 && path1[splited[2]];
		const value = path2 || path1 || path0 || null;
		return value;
	}

	// onDeleteRow(id) {
	//   this.accountsService.deleteUser(id).subscribe(
	//     () => this.getAll()
	//   );
	// }

	/* TABLE FEATURES */
	generateTable(data) {
		this.dataSource = new MatTableDataSource(data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}
	/* Filtering */
	subscribeToAllFilters() {
		this.searchInput.valueChanges
			.pipe(debounceTime(700))
			.subscribe(() => this.getAll());
		this.getAll();
	}

	closeSubscriptions() {
		this.activatedId$.unsubscribe();
	}

	getAll() {
		const options = {
			limit: this.paginator ? this.paginator.pageSize : 10,
			page: this.paginator ? this.paginator.pageIndex : 0,
			sortBy: this.sort.active || 'id',
			sortOrder: this.sort.direction || 'asc',
			textSearch: this.searchInput.value
		};

		// this.accountsService.getAllUsers(options).subscribe(response => {
		// 	const { data, meta } = response;
		// 	this.paginator.length = meta.total_items;
		// 	this.generateTable(data);
		// });
	}
}
