import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from '../card/card';
import { Getallcatgories } from '../services/getallcatgories';
@Component({
  selector: 'app-orders',
  imports: [FormsModule,Card],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
selectedCategory : string = '';

private getallcatgories: Getallcatgories = inject(Getallcatgories);
categories = this.getallcatgories.categories;

  
}
