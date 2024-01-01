import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  abc(){
    alert("You clicked me..!!!");
  }

  technologies: string[] = ['Java', 'SpringBoot', 'React.js', 'Angular','MySQL','Bootstrap','HTML','CSS'];
  technology: boolean = false;


  showTechnology() {
    this.technology = !this.technology;
    // this.cert=!this.cert;
  }

  certifications: string[] = []; // Initialize certifications array
  cert:boolean=false;

  receiveCertificationData(certificationInfo: string) {

    this.cert=!this.cert;
    // this.technology = !this.technology;
    console.log(certificationInfo);

    // Split the certificationInfo string and add to certifications array
    this.certifications = certificationInfo.split('\t');

  }

}

