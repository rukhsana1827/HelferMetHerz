import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [Header,
    Footer,
    RouterOutlet
  ],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
