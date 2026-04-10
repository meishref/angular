import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Review } from '../review/review';
import { Info } from '../info/info';

@Component({
  selector: 'app-about',
  imports: [RouterModule,Review, Info],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
