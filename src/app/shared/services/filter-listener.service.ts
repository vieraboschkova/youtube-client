import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterListenerService {
  public filterOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public filteringInput: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public sortingBy: BehaviorSubject<string> = new BehaviorSubject<string>('date');
  public sortingDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
