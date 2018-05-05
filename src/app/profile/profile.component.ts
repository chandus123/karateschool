import { Component, OnInit, Pipe, PipeTransform, ViewEncapsulation } from '@angular/core';
import { MainService } from '../main.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from "./profile.pipe";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})



export class ProfileComponent implements OnInit {

  profiles;

  constructor(private MainService: MainService) { }

  ngOnInit() {
    this.profiles = this.MainService.getProfiles();
  }

}
