import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  public readonly profilePictureImagePath: string = '../../assets/profile-picture.jpg';
  public readonly logoImagePath: string = '../../assets/main_logo.png';
  public readonly profileName: string = 'Devin McMillen';
  public readonly currentTitle: string = 'Software Engineer III';
  public readonly emailAddress: string = 'dmcmille90@protonmail.com';
  public readonly phoneNumber: string = '317.550.7674';
}
