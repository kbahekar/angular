import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  closeDropdown(dropdownElement: HTMLElement) {
    dropdownElement.classList.remove('show');
    const menu = dropdownElement.querySelector('.dropdown-menu');
    if (menu) {
      menu.classList.remove('show');
    }
     dropdownElement.classList.remove('show');
  if (menu) {
    menu.classList.remove('show');
  }

  const toggle = dropdownElement.querySelector('[data-bs-toggle="dropdown"]');
  if (toggle) {
    toggle.setAttribute('aria-expanded', 'false');
  }
  }

 
 
}
