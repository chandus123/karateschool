import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  currentEvent;
  currentYear;

  constructor(private MainService: MainService, private router: Router) { }

  ngOnInit() {

    this.currentEvent   = this.MainService.getEvents().values().next().value;
    this.currentYear    = this.MainService.getEvents().keys().next().value;
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  onYearSelect($event)
  {
    this.currentYear    = $event.year;
    this.currentEvent   = this.MainService.getEvents().get($event.year);
  }

}
