import { Component,inject,OnChanges,OnInit } from '@angular/core';
import { Roony } from '../models/roony';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-details.html',
  styleUrls: ['./card-details.css'],
})

export class CardDetails implements OnInit {
selectedproduct!: Roony ;


constructor(private activatedRoute: ActivatedRoute) {
}
  private api: Api = inject(Api);

    
  



products: Roony[] = [];


ngOnInit(): void { 

this.products = this.api.getcource();
  const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  this.selectedproduct = this.products.find(p => p.id === id)!;
    if (!this.selectedproduct) {
      alert('Course not found!');
    } 
}
}
