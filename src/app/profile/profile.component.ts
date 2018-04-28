import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles;

  constructor(private MainService: MainService) { }

  ngOnInit() {
    this.profiles = this.MainService.getProfiles();
  }

}
