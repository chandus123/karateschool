import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../../main.service';

@Component({
  selector: 'welcome-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class WelcomeGallery implements OnInit {

  gallery : string[] = [];

  constructor(private MainService : MainService) { }

  ngOnInit() {
    this.gallery = this.MainService.getCurrentGallery().value;
  }

}
