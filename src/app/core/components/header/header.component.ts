import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterListenerService } from 'src/app/shared/services/filter-listener.service';
import { AuthService } from '../../services/auth.service';
import { SearchResultsService } from '../../services/searchResults.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public filterDisplay: boolean;
  public subscriptions: Subscription;
  public loggedIn: boolean;
  @Output() public showResults = new EventEmitter<string>();

  constructor(private filter: FilterListenerService, private auth: AuthService) { }

  public ngOnInit(): void {
    this.subscriptions = this.auth.wasAuthorized.subscribe(didLog => {
      this.loggedIn = didLog;
    });
    this.subscriptions.add(this.filter.filterOn.subscribe(filterOn => {
      this.filterDisplay = filterOn;
    }));
    console.log('constructor works');
  }

  public ngOnDestroy(): void {
    console.log('ondestroy works');
    console.log(this.filter.filterOn.value);
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  public filterToggle() {
    console.log('toggling filter');
    this.filter.filterOn.next(!this.filter.filterOn.value);
  }
  public showResponse (): void {
    console.log('showing response');
    this.showResults.emit();
  }
}
