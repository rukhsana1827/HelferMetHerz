import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule,
    RouterLink
  ],
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
  @ViewChild('statsSection', { static: true }) statsSection!: ElementRef;
private animated = false;
  constructor(private el: ElementRef, private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  stats = [
  { label: 'Besucher', target: 102, suffix: 'k+', current: 0 },
  { label: 'Einsätze', target: 5000, suffix: '+', current: 0 },
  { label: 'Zufriedene Kunden', target: 500, suffix: '+', current: 0 },
  { label: 'Deutsche Städte', target: 30, suffix: '+', current: 0 }
];
faqs = [
  { 
    question: 'Wie schnell finde ich einen Helfer?', 
    answer: 'In der Regel können wir Ihnen innerhalb von 48 Stunden eine passende Unterstützung vorstellen.',
    open: false 
  },
  { 
    question: 'Werden die Kosten von der Pflegekasse übernommen?', 
    answer: 'Ja, ab Pflegegrad 1 können viele unserer Leistungen über den Entlastungsbetrag abgerechnet werden.',
    open: false 
  },
  {
    question: 'Wie wählen Sie Ihre Helfer aus? Antwort?',
    answer: 'Unsere Helfer durchlaufen einen sorgfältigen Auswahlprozess, der Interviews, Referenzprüfungen und Hintergrundüberprüfungen umfasst.',
    open: false 
  },
  {
    'question': 'Kann ich die Helfer vorab kennenlernen?',
    'answer': 'Ja, wir arrangieren gerne ein unverbindliches Kennenlerngespräch, damit Sie sich ein Bild von der Person machen können.',
    open: false
  }
];
  ngOnInit() {
    this.setupIntersectionObserver();
  }

  toggleFaq(index: number) {
  // Close others (Optional: comment out if you want multiple open)
  this.faqs.forEach((f, i) => {
    if(i !== index) f.open = false;
  });
  
  this.faqs[index].open = !this.faqs[index].open;
}

 setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Start animation if visible and hasn't run yet
        if (entry.isIntersecting && !this.animated) {
          this.animate();
          this.animated = true; 
          observer.unobserve(this.statsSection.nativeElement); // Stop watching after trigger
        }
      });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

    observer.observe(this.statsSection.nativeElement);
  }

  animate() {
    const duration = 2000; 
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      this.stats.forEach(stat => {
        stat.current = Math.floor(progress * stat.target);
      });

      this.cdr.detectChanges();

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }

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