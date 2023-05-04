import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quotationMarks'
})
export class QuotationMarksPipe implements PipeTransform {

  transform(content: any): any {
    content = "\""+content+"\"";
    return content;
  }
}
