import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 30) {
      return value.substr(0, 30) + '...';
    }
    return value;
  }

}
