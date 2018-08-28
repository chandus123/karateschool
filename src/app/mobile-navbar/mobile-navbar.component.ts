import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router,  NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.css']
})
export class MobileNavbarComponent implements OnInit {

  cls = [];
  currentUrl;

  constructor(private router: Router) { 
    this.cls.push('topnav');
  }

  
  ngOnInit() {
    this.router.events
    .subscribe((event) => {
      if(event instanceof NavigationEnd)
      {
        console.log('NavigationEnd:', event);
        if(event['url'] == '/')
        {
          this.currentUrl = 'welcome';
        }
        else
        {
          this.currentUrl = event['url'].substring(1,event['url'].length);
        }
        console.log(this.currentUrl);
      }
      
    });
  }

  chanFunction()
  {
    this.cls.pop();
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
