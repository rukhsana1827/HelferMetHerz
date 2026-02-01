import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMegaMenuOpen = false;
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;


  closeFullNavbar() {
    // 1. Close the Mega Menu dropdown specifically
    this.isMegaMenuOpen = false;

    // 2. Close the main Bootstrap Mobile Navbar
    if (this.navbarCollapse.nativeElement.classList.contains('show')) {
      this.navbarCollapse.nativeElement.classList.remove('show');
    }
  }

  closeMegaMenu() {
    this.isMegaMenuOpen = false;
    const dropdown = document.querySelector('.mega-menu-content') as HTMLElement;
    if (dropdown) {
      dropdown.style.display = 'none';
      dropdown.style.opacity = '0';
      dropdown.style.visibility = 'hidden';
    }
  }
  openMegaMenu() {
    this.isMegaMenuOpen = true;
    const dropdown = document.querySelector('.mega-menu-content') as HTMLElement;
    if (dropdown) {
      dropdown.style.display = 'block';
      dropdown.style.opacity = '1';
      dropdown.style.visibility = 'visible';
    }
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.mega-menu-static');

    if (!clickedInside && this.isMegaMenuOpen) {
      this.closeMegaMenu();
    }
  }

}
