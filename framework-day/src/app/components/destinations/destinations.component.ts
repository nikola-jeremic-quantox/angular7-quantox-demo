import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-destinations',
	templateUrl: './destinations.component.html',
	styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

	filteredDestinations: any;
  allDestinations: any;
  
	chosenCategory: string;

	filterForm = new FormGroup({
		country: new FormControl(''),
		category: new FormControl(''),
		stars: new FormControl(null)
	});

  chosenFilter = { country: [], category: [], stars: [], };
  tableFilters = Object.keys(this.chosenFilter);
  dataColumns = ['id', 'name', 'region', 'country', 'category', 'stars'];
	displayedColumns = ['select', ...this.dataColumns];

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
      this.allDestinations = res;
      this.filterTable();
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

    Object.keys(this.chosenFilter).forEach(key => {
      let value = this.chosenFilter[key].map( el => el.name);
      if(value.length) {
        filteredData.forEach( (row, index) => {
          if( !value.includes(row[key]) ) {
            filteredData.splice( index, 1)
          };
        } )
      }
    });
    this.generateTable(filteredData);
    
	}
}
