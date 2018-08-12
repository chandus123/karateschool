import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'merge'
})
export class MergePipe implements PipeTransform {

  transform(value: any, args?: any): any {
     
     let str = '';
     for(let i=0;i<value.length;i++)
     {
          str = str + value[i]+'<br>';
     }
     return str;
  }

}
