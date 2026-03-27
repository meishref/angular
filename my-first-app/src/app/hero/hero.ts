import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Roony } from '../models/roony';  
@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  company :Roony = {
    name: 'mohammed meshrif and sons',
    location: 'Cairo, Egypt',
    profession: 'Robtics and AI Solutions',
  };
  
  projects = 0;
  clients = 0;
  years = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters() {
    this.smoothCounter('projects', 1000, 2000);
    this.smoothCounter('clients', 500, 2000);
    this.smoothCounter('years', 25, 2000);
  }

  smoothCounter(
    field: 'projects' | 'clients' | 'years',
    target: number,
    duration: number
  ) {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);

      this[field] = Math.floor(easeOut * target);

      this.cdr.detectChanges(); 

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
}