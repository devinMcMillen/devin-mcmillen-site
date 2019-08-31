import { DocumentWrapper } from './../../helpers/document-wrapper';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavBarConstants } from 'src/app/temp-constants/temp-constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  navBarElement: HTMLElement;

  dataStructureSideBarOptions: any[];
  algorithmsSideBarOptions: any[];
  projectsSideBarOptions: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.dataStructureSideBarOptions = NavBarConstants.dataStructureSideBarOptions;
    this.algorithmsSideBarOptions = NavBarConstants.algorithmsSideBarOptions;
    this.projectsSideBarOptions = NavBarConstants.projectSideBarOptions;

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
