import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  cls = [];

  constructor() { 
    this.cls.push('topnav');
  }

  ngOnInit() {
  }

  myFunction(){
    
    if(this.cls.length > 1)
    {
      this.cls = this.cls.filter(function(item){
          if(item == 'topnav')
          {
            return true;
          }
          else
          {
            return false;
          }
      });
    }
    else
    {
        this.cls.push('responsive')
    }
  }

}
