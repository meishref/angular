import { Component,inject,Input,OnInit, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Roony } from '../models/roony';
import { DisccountPipe } from '../pips/disccount-pipe';
import { Router, RouterModule } from '@angular/router';
import { Api } from '../services/api';
import { EventEmitter } from '@angular/core';
import { Buttonclick } from '../drivtives/buttonclick'; 
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule,DisccountPipe, CommonModule,Buttonclick,RouterModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card  implements OnInit {
 

products : Roony[] = []
private api: Api = inject(Api);
ngOnInit() {
  this.products = this.api.getcource();
}

getcoursebyid(id: number): Roony {
  const product = this.api.getcoursebyid(id);
  if (!product) {
    throw new Error('Course not found');
  }
  return product;
}





@Input() selectedCategory : string = '';
@Output() totalPriceevent: EventEmitter<number> = new EventEmitter();
filterProducts() {
  if (!this.selectedCategory) {
    return this.products;
  }

  return this.products.filter(
    product => product.category === this.selectedCategory
  );
}
enroll(id: number) {
  const enrollment =  this.api.enroll(id);
 
}
constructor(private router: Router) {}
viewDetails(id: number) {
  this.router.navigate([`/card-details/${id}`]);
}
totalPriceofall(product: Roony): number {
  return product.price * (product.quantity || 1)  ;
}
sendTotalPrice(product: Roony) {
this.totalPriceevent.emit(this.totalPriceofall(product));
}
}