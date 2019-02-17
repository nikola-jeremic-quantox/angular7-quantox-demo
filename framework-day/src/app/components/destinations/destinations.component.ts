import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Subscription, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-destinations',
	templateUrl: './destinations.component.html',
	styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit, OnDestroy {

	filteredDestinations: any;
  allDestinations: any;
  isAdmin: boolean;

  categorySubsription: Subscription;

	filterForm = new FormGroup({
		country: new FormControl(''),
		category: new FormControl(''),
		stars: new FormControl(null)
	});

  chosenFilter = { country: [], category: [], stars: [], };
  tableFilters = Object.keys(this.chosenFilter);

  visitorColumns = ['id', 'name', 'region', 'country', 'category', 'stars'];
  adminColumns = ['select', ...this.visitorColumns, 'settings'];
  displayedColumns = this.isAdmin ? [...this.adminColumns] : [...this.visitorColumns]; 

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
  
  ngOnDestroy() {
   this.categorySubsription.unsubscribe();
  }

	getCategory() {
		this.categorySubsription = this.sharedService.activeCategory.subscribe(
			res => {
        this.chosenFilter.category = res;
        this.filterTable();
      }
		);
  }
  
	openSubsriptions() {
    this.apiService.getCollectionItems('destinations').subscribe(res => {
        this.allDestinations = res;
        this.getCategory();
      })
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
	//     () => this.filterTable()
	//   );
	// }

	/* TABLE FEATURES */
	generateTable(data) {
		this.dataSource = new MatTableDataSource(data);
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
  }
  
	subscribeToAllFilters() {
		this.searchInput.valueChanges
			.pipe(debounceTime(700))
			.subscribe(() => this.filterTable());
		this.filterTable();
	}

  onItemsChange(object) {
    this.chosenFilter[object.key] = object.value;
  }

	filterTable() {

    let filteredData = [...this.allDestinations];

    const keys = Object.keys(this.chosenFilter);

    keys.forEach(key => {
      let value = this.chosenFilter[key] && this.chosenFilter[key].map( el => el.name || el);
      if (value.length) {
        filteredData = filteredData.filter( element => value.includes(element[key]) );
      }
    });

    this.generateTable(filteredData);    
    
	}
}
