import { Component, inject, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Roony } from '../models/roony';
import { Apiproduct } from '../services/apiproduct';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class Card implements OnInit {

  @Input() selectedCategory: string = '';

  private apiProduct = inject(Apiproduct);

  products: Roony[] = [];

  ngOnInit(): void {
    this.apiProduct.getallProducts().subscribe((res) => {
      this.products = res;

      this.products.forEach(p => p.quantity = 1);
    });
  }

  handleEnroll(product: Roony) {
    const total = product.price * (product.quantity || 1);
    console.log('Added:', product.title, 'Total:', total);
  }
}