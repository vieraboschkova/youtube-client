import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { SearchResultsService} from '../../services/searchResults.service';
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
  @ViewChild ('filterWord', {static: false}) sortWordInput: ElementRef;

  constructor(private search: SearchResultsService) { }

  ngOnInit(): void {
  }

  public onSelectSortType(sortType: string, word?: string) {
    this.search.doNotSearch();
    if (!word && sortType === 'word') {
      alert('no string, showing all results');
    }
    console.log('filtering')
    this.sortWordInput.nativeElement.value = '';
    this.search.setType(sortType);
    this.search.setWord(word);
    this.search.wordWasSet.emit(word);
    this.search.sortWasSet.emit(sortType);
    this.search.increasingWasSet.emit(this.search.increasing);
  }
}
