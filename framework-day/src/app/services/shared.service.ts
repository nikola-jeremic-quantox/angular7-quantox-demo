import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SharedService {

    activatedId = new BehaviorSubject<any>( null );
    chosenCategory = new BehaviorSubject<any>( null );

}
