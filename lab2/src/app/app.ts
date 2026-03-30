import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { Header } from './header/header';
import { Homepage } from './homepage/homepage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Card, Header, Homepage],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('lab2');
}
