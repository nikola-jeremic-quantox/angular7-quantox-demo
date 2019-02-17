import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SharedService {

    activeCategory = new BehaviorSubject<any[]>([]);

}
