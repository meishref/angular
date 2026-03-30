import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Getallcatgories {

getallcategories() {
  return this.categories;
}
  categories = ['All', 'Angular', 'React', 'Vue', 'Node', 'Python'];
}
