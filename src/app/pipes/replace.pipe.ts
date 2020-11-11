import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {
    
    transform(value: string): string {
        var re = / /gi; 
        var newstr = value.replace(re, "-"); 
        return newstr;
      }
}