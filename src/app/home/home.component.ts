import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  technologies: string[] = ['Java', 'SpringBoot', 'React.js', 'Angular','MySQL','Bootstrap','HTML','CSS'];
  technology: boolean = false;
  // cert:boolean=false;

  showTechnology() {
    this.technology = !this.technology;
  }

  certifications: string[] = []; // Initialize certifications array
  certification: boolean = false;

  receiveCertificationData(certificationInfo: string) {

    // this.cert=!this.cert;

    console.log(certificationInfo);

    // Split the certificationInfo string and add to certifications array
    this.certifications = certificationInfo.split('\n');

    // Set the certification variable to true to show the list
    this.certification = !this.certification;
  }

}

