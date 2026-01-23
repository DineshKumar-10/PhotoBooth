import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;
  showCameraExperience = false;
  experienceText = 'Get Ready...';

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  playCameraExperience() {
    this.closeMenu();

    // ✅ Step 1: Go to Home
    this.router.navigate(['/']);

    // ✅ Step 2: Camera experience animation
    this.showCameraExperience = true;

    const texts = ['Get Ready...', 'Smile 😊', '📸 Click!'];
    let index = 0;

    const interval = setInterval(() => {
      this.experienceText = texts[index];
      index++;

      if (index === texts.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.showCameraExperience = false;
        }, 700);
      }
    }, 700);
  }
}



