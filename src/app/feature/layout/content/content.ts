import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';
import { Whatsapp } from '../whatsapp/whatsapp';

@Component({
  selector: 'app-content',
  imports: [Header,
    Footer,
    Whatsapp,
    RouterOutlet
  ],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {

}
