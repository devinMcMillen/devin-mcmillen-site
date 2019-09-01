import { trigger, state, style, transition, animate } from '@angular/animations';
import { DocumentWrapper } from './../../helpers/document-wrapper';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class HomePageComponent implements OnInit {
  navBarElement: HTMLElement;

  constructor(private router: Router) { }

  ngOnInit() {
    this.navBarElement = document.getElementById('mainNavBar');
    this.hideNavBar();
  }

  public navigateToComponent(route: string): void {
    this.unHideNavBar();
    this.router.navigateByUrl(route);
  }

  private hideNavBar(): void {
    DocumentWrapper.toggleElementDisplay(this.navBarElement);
  }

  public unHideNavBar(): void {
    DocumentWrapper.toggleElementDisplay(this.navBarElement);
  }
}
