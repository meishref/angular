import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetallCategories {

getallcategories() {
  return this.categories;
}
  categories = ['All', 'Angular', 'React', 'Vue', 'Node', 'Python'];
}
