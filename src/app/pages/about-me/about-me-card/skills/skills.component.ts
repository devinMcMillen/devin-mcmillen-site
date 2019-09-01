import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public professionalLanguagesAndFrameworks: string[];
  public professionalTools: string[];
  public interestLanguagesAndFrameworks: string[];
  public interestTools: string[];

  constructor() { }

  ngOnInit() {
    this.professionalLanguagesAndFrameworks = [
      '.NET Core', 'ASP.NET', 'Angular', 'C#', 'KnockoutJS', 'ES5', 'ES6', 'Typescript',
      'Jasmine', 'Karma', 'SQL',  'HTML', 'CSS'
    ];
    this.professionalTools = [
      'Visual Studio 2017', 'Visual Studio 2019', 'VS Code', 'SQL Server', 'Splunk',
      'Jira', 'NPM', 'Git', 'TFS', 'Azure', 'DevOps'
    ];
    this.interestLanguagesAndFrameworks = [
      'Rust', 'Ruby', 'Python', 'Hadoop', 'Spark', 'NodeJS'
    ];
    this.interestTools = [
      'Docker'
    ];
  }

}
