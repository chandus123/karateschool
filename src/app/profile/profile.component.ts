import { Component, OnInit, Pipe, PipeTransform, ViewEncapsulation } from '@angular/core';
import { MainService } from '../main.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from "./profile.pipe";
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})



export class ProfileComponent implements OnInit {

  profiles;

  constructor(private MainService: MainService, private router: Router) { }

  ngOnInit() {
    this.profiles = this.MainService.getProfiles();
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

}
