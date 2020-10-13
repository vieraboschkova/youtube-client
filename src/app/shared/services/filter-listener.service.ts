import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterListenerService {
  filteringInput: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  sortingBy: BehaviorSubject<string> = new BehaviorSubject<string>('date');
  sortingDown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}