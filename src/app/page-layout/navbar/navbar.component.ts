import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NavBarConstants } from 'src/app/temp-constants/temp-constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // Navbar Hamburger elements
  @ViewChild('navBurger', null) navBurger: ElementRef;
  @ViewChild('navMenu', null) navMenu: ElementRef;

  @Output() dataStructureSelected = new EventEmitter();

  // Sidebar options for each selection
  dataStructureSideBarOptions: any[];
  algorithmsSideBarOptions: any[];
  projectsSideBarOptions: any[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataStructureSideBarOptions = NavBarConstants.dataStructureSideBarOptions;
    this.algorithmsSideBarOptions = NavBarConstants.algorithmsSideBarOptions;
    this.projectsSideBarOptions = NavBarConstants.projectSideBarOptions;
  }

  public toggleNavbar(): void {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  public navigateToComponent(route: string): void {
    this.router.navigateByUrl(route);
  }
}
