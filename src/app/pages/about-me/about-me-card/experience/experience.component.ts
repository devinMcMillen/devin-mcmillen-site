import { Component, OnInit, Input } from '@angular/core';
import { IExperience } from '../../interfaces/about-me.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() experienceDetails: IExperience[];

  constructor() { }

  ngOnInit() {
  }

}
