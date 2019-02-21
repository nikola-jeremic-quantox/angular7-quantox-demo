import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { startWith, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {

  @Input() control: string;
  @Input() selected: any;
  @Input() parentForm: FormGroup;

  @Output() itemsChange = new EventEmitter();

  items = [];
  itemsSelected = [];
  itemsFilter$: Observable<string[]>;

  controlsMap = {
    country:   { title: 'Country',  holder: 'Choose a country',  method: this.api.getCollectionItems('countries') },
    category:  { title: 'Category', holder: 'Choose a category', method: this.api.getCollectionItems('categories') },
    stars:     { title: 'Stars',    holder: 'Choose stars',      method: this.api.getCollectionItems('stars') },
  };

  constructor( private api: ApiService ) {}

  ngOnInit() {
    this.generateFields();
  }

  generateFields() {
    this.controlsMap[this.control].method.subscribe(res => {
      this.items = res;
      this.itemsSelected = this.selected[this.control];
      this.watchForChanges();
    });
  }

  onAddItem(item) {
    if (!this.itemsSelected.includes(item)) {
      this.itemsSelected.push(item);
      this.itemsChange.emit({key: this.control, value: this.itemsSelected});
    }
  }

  onRemoveItem(index) {
      this.itemsSelected.splice(index, 1);
      this.itemsChange.emit({key: this.control, value: this.itemsSelected});
  }

  watchForChanges() {
    this.itemsFilter$ = this.parentForm.controls[this.control].valueChanges.pipe(
      startWith(''),
      map( value => this.filterItems(value) )
    );
  }

  filterItems(value) {
    const filterValue = value.name ? value.name.toLowerCase() : value.toLowerCase();
    return this.items.filter(option => {
      if (option.name) {
        return option.name.toLowerCase().includes(filterValue);
      } else if (option.userPrice) {
        return option.userPrice.toLowerCase().includes(filterValue);
      }
    });
  }

  displayName(obj?) {
    return obj && obj.name;
  }
}
