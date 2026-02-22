import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  SearchCountryField,
  NgxIntlTelInputModule
} from "ngx-intl-tel-input";
declare var bootstrap: any;

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
  ],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  isSending = false;
  SearchCountryField = SearchCountryField;
  phone: any;
  public sendEmail(e: Event) {
    e.preventDefault();
    this.isSending = true;

    const SERVICE_ID = 'service_aakpazk';
    const TEMPLATE_ID = 'template_7gwu0ec';
    const PUBLIC_KEY = 'tfJAMfc1-IPDHx3sk';

    const templateParams = {
      name: (document.querySelector('[name="name"]') as HTMLInputElement)?.value,
      email: (document.querySelector('[name="email"]') as HTMLInputElement)?.value,
      message: (document.querySelector('[name="message"]') as HTMLTextAreaElement)?.value,
      phone: this.phone?.internationalNumber || ''
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        this.isSending = false;
       
      (e.target as HTMLFormElement).reset();

      // Show modal
      const modalElement = document.getElementById('successModal');
      const modal = new bootstrap.Modal(modalElement!);
      modal.show();
      }, (error) => {
        this.isSending = false;
      });
  }
 
}
