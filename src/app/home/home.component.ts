import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  technologies: string[] = ['Java', 'SpringBoot', 'React.js', 'Angular','MySQL','Bootstrap','HTML','CSS'];
  technology: boolean = false;

  showTechnology() {
    this.technology = !this.technology;
  }
}
