import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {
  // Expecting Many arguments
  // transform(value: any, ...args: any[]): any {
  //   console.log(args);
  //   if(!value){
  //     return '';
  //   }

  //   return value * 1.609
  // }

  // Expecting a single argument
  transform(value: any, targetUnits: string): any {
   
    if(!value){
      return '';
    }

    switch(targetUnits){
      case 'km':
        return parseFloat(value) * 1.60934;
      case 'm':
        return parseFloat(value) * 1.60934 * 1000;
      case 'cm':
        return parseFloat(value) * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not supported');
    }

   
  }

}
