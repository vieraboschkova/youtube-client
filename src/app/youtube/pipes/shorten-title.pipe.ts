import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string, limit: number, ...args: unknown[]): unknown {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }

}
