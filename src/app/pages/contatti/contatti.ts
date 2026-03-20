import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contatti',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contatti.html',
  styleUrl: './contatti.scss',
})
export class Contatti {
  @ViewChild('contactForm') contactForm!: ElementRef;
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'it';
    this.translate.use(lang);
  }
  formStatus: 'success' | 'error' | null = null;

  scrollToForm() {
    this.contactForm.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  sendEmail(e: Event) {
    e.preventDefault();

    this.formStatus = null;

    emailjs
      .sendForm(
        'service_rbiw6qh',
        'template_j3cp834',
        e.target as HTMLFormElement,
        'Ur-kRU8K0zU06lwqd',
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.formStatus = 'success';

          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error(error.text);
          this.formStatus = 'error';
        },
      );
  }
}
