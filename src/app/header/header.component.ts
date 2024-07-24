import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isloggedin = false;
  navbarCollapsed = true;
  constructor(private router: Router) {
    if (localStorage.getItem('Loginuser')) {
      this.isloggedin = true;
    }
  }

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  onLogout() {
    localStorage.removeItem('Loginuser');
    this.isloggedin = false;
    this.router.navigate(['/']);
  }
}
