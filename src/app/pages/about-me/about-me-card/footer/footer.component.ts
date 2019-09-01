import { Component, OnInit, Input } from '@angular/core';
import { IProfileLinks } from '../../interfaces/about-me.interface';
import { WindowWrapper } from 'src/app/helpers/window-wrapper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerLinks: IProfileLinks;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Redirect to GitHub
   */
  public redirectToGithub(): void {
    WindowWrapper.navigateToUrl(this.footerLinks.github);
  }

  /**
   * Redirect to LinkedIn
   */
  public redirectToLinkedIn(): void {
    WindowWrapper.navigateToUrl(this.footerLinks.linkedIn);
  }
}
