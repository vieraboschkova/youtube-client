import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchResultsService} from '../../services/searchResults.service';
import { FilterListenerService } from '../../../shared/services/filter-listener.service';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
  providers: []
})
export class SearchFilterComponent implements OnInit {
  public sortingOption: string = '';
  public sortingKeyword: string = '';
  public filteredBy: string;
  public orderDown: boolean = false;
  @ViewChild ('filterWord', {static: false}) public sortWordInput: ElementRef;

  constructor(private search: SearchResultsService, private filterListener: FilterListenerService) { }

  public ngOnInit(): void {
  }

  public onSelectSortType(sortType: string, word?: string) {
    if (!word && sortType === 'word') {
      alert('no string, showing all results');
    }
    this.sortWordInput.nativeElement.value = '';
    if (sortType === 'date' || sortType === 'view') {
      if (this.filterListener.sortingBy.value === sortType) {
        // console.log(this.filterListener.sortingBy.value)
        this.filterListener.sortingDown.next(!this.filterListener.sortingDown.value);
        // console.log(this.filterListener.sortingDown.value)
      } else {
        this.filterListener.sortingBy.next(sortType);
        this.filterListener.sortingDown.next(false);
       }
    } else if (sortType === 'word') {
      this.filterListener.filteringInput.next(word);
      this.filterListener.sortingBy.next(sortType);
    }
    // console.log(this.filterListener.sortingBy.value)
    // console.log(this.filterListener.sortingDown.value)
    // console.log(this.filterListener.filteringInput.value)
    this.search.sortArrayOfResults(
      this.filterListener.sortingBy.value,
      this.filterListener.sortingDown.value,
      this.filterListener.filteringInput.value
    );
  }
}
