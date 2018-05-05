import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SliderModule } from 'angular-image-slider';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { ImagesliderComponentComponent } from './welcome-component/imageslider-component/imageslider-component.component';
import { HeaderComponent } from './header/header.component';
import { EventsliderComponent } from './welcome-component/eventslider/eventslider.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { YearlistComponent } from './events/yearlist/yearlist.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeGallery } from './welcome-component/gallery/gallery.component';
import { MainService } from './main.service';
import { GalleryyearlistComponent } from './gallery/galleryyearlist/galleryyearlist.component';
import { SafeHtmlPipe } from './profile/profile.pipe';
 

const appRoutes: Routes = [
  {path: '', component: WelcomeComponentComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'events', component: EventsComponent },
  {path: 'gallery', component: GalleryComponent },
  {path: 'contacts', component: ContactsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    WelcomeComponentComponent,
    ImagesliderComponentComponent,
    HeaderComponent,
    EventsliderComponent,
    ProfileComponent,
    EventsComponent,
    GalleryComponent,
    ContactsComponent,
    FooterComponent,
    WelcomeGallery,
    YearlistComponent,
    GalleryyearlistComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
