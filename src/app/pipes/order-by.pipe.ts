import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from 'lodash';

@Pipe({
 name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
 transform(array: any, sortBy: string, order?: string): any[] {
 const sortOrder = order ? order : 'asc'; // setting default ascending order

  return orderBy(array, [sortBy], [sortOrder as 'asc' | 'desc']);
  }
}