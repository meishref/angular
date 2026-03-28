import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Roony } from '../models/roony';
import { DisccountPipe } from '../pips/disccount-pipe';
import { Buttonclick } from '../drivtives/buttonclick';
@Component({
  selector: 'app-card',
  imports: [FormsModule,DisccountPipe, CommonModule,Buttonclick],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  selectedCategory : string = '';

products : Roony[] = [
  {
    id: 1,
    title: 'Angular Course',
    category: 'Angular',
    description: 'Learn Angular from scratch',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    price: 1200,
    discountPrice: 800,
    seats: 10,
    rating: 4.5
  },
  {
    id: 2,
    title: 'React Course',
    category: 'React',
    description: 'Master React step by step',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    price: 1000,
    discountPrice: 750,
    seats: 5,
    rating: 4.7
  },
  {
    id: 3,
    title: 'Vue Course',
    category: 'Vue',
    description: 'Build apps with Vue JS',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    price: 900,
    discountPrice: 600,
    seats: 3,
    rating: 4.3
  },
  {
    id: 4,
    title: 'Node.js Course',
    category: 'Node',
    description: 'Backend with Node.js',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    price: 1100,
    discountPrice: 850,
    seats: 8,
    rating: 4.6
  },
  {
    id: 5,
    title: 'Python Course',
    category: 'Python',
    description: 'Learn Python programming',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    price: 950,
    discountPrice: 700,
    seats: 6,
    rating: 4.4
  },
  {
    id: 6,
    title: 'Java Course',
    category: 'Java',
    description: 'Master Java programming',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    price: 1050,
    discountPrice: 800,
    seats: 4,
    rating: 4.2
  },
  {
    id: 7,
    title: 'UI/UX Design',
    category: 'UI/UX',
    description: 'Design modern interfaces',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698',
    price: 850,
    discountPrice: 600,
    seats: 7,
    rating: 4.8
  }
];
categories = ['All', 'Angular', 'React', 'Vue', 'Node', 'Python'];
filterProducts() {
  if (!this.selectedCategory) {
    return this.products;
  }

  return this.products.filter(
    product => product.category === this.selectedCategory
  );
}
enroll(id: number) {
  const product = this.products.find(p => p.id === id);
  if (product && product.seats > 0) {
    product.seats--;
    alert(`You have enrolled in ${product.title}!`);
  } else {
    alert(`Sorry, ${product?.title || 'the course'} is fully booked.`);
  }
}
}