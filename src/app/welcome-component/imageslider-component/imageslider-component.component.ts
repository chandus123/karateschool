import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-imageslider-component',
  templateUrl: './imageslider-component.component.html',
  styleUrls: ['./imageslider-component.component.css']
})
export class ImagesliderComponentComponent implements OnInit {

  public images;
  constructor() { }

  ngOnInit() {
    this.images = [
      '../../../assets/s1-imo.png',
      '../../../assets/s2-imo.png',
      '../../../assets/s3-imo.png',
      '../../../assets/s4-imo.png',
      ];

      
      
  }

}
