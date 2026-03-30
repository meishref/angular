import { Component, Input  } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
   count : number = 0;
   @Input() title: string = '';

  onContactClick(): void {
    this.count++;
    alert(`Contact clicked ${this.count} times.`);
  }
}