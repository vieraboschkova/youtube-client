import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    value: any, 
    filterType: string, 
    filterString: string, 
    propName: string, 
    ...args: unknown[]): unknown {
    if (value.length === 0 || filterType !== 'word') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      console.log('trying to filter:' + item.snippet.tags);
      if (item.snippet.tags.includes(filterString)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
