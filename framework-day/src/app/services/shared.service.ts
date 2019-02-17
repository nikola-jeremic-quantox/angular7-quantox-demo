import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SharedService {

    isLogged         = new BehaviorSubject( false );
    activeCategories = new BehaviorSubject( [] );

}
