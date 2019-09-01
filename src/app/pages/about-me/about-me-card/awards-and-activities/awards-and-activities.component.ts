import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-awards-and-activities',
  templateUrl: './awards-and-activities.component.html',
  styleUrls: ['./awards-and-activities.component.css']
})
export class AwardsAndActivitiesComponent implements OnInit {
  @Input() awardsAndActivitiesDetails: string[];

  constructor() { }

  ngOnInit() {
  }

}
