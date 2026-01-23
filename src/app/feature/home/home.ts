import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
currentYear: number = new Date().getFullYear();

  formData = {
    name: '',
    phone: '',
    postalCode: ''
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  scrollToForm(): void {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToServices(): void {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Vielen Dank! Wir werden uns bald bei Ihnen melden.');
    this.formData = {
      name: '',
      phone: '',
      postalCode: ''
    };
  }

 ngAfterViewInit() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.renderer.addClass(entry.target, 'show');
      }
    });
  }, { threshold: 0.1 });

  // Watch every element with the animation class
  const elements = this.el.nativeElement.querySelectorAll('.animate-fade-up');
  elements.forEach((el: HTMLElement) => observer.observe(el));
}
}