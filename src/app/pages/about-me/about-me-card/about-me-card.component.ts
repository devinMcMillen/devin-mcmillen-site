import { Component, OnInit } from '@angular/core';
import { IExperience, IEducation } from '../interfaces/about-me.interface';
import { EXPERIENCE, EDUCATION, AWARDS_AND_ACTIVITIES, HOME_PAGE_LINKS } from '../constants/about-me-constants';

@Component({
  selector: 'app-about-me-card',
  templateUrl: './about-me-card.component.html',
  styleUrls: ['./about-me-card.component.css']
})
export class AboutMeCardComponent implements OnInit {
  public experienceDetails: IExperience[];
  public educationDetails: IEducation[];
  public awardsAndActivities: string[];
  public footerLinks: {};

  constructor() { }

  ngOnInit() {
    // Replace the following line with a service used to get the information from the backend.
    this.experienceDetails = EXPERIENCE;
    this.educationDetails = EDUCATION;
    this.awardsAndActivities = AWARDS_AND_ACTIVITIES;
    this.footerLinks = HOME_PAGE_LINKS;
  }
}
