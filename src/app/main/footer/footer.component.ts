import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  iconLinkedin = faLinkedin as IconDefinition
  iconWhats = faWhatsapp as IconDefinition;
  iconGitHub = faGithub as IconDefinition;

  constructor() {

  }
}
