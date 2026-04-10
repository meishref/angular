import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from '../card/card';
import { GetallCategories } from '../services/getallcategories';
@Component({
  selector: 'app-orders',
  imports: [FormsModule,Card],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
selectedCategory : string = '';

private getallCategories: GetallCategories = inject(GetallCategories);
categories = this.getallCategories.categories;

  
}
