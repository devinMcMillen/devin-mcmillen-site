import { Component, OnInit, Input } from '@angular/core';
import { IEducation } from '../../interfaces/about-me.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educationDetails: IEducation[];

  constructor() { }

  ngOnInit() {
  }

}
