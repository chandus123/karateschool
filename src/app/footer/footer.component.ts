import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year : number;
  d    : Date;

  constructor() { }

  ngOnInit() {
    this.d = new Date(); 
    this.year = this.d.getFullYear();
  }

}
