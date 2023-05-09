import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FeedComponent } from './feed/feed.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { SearchComponent } from './search/search.component';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { PageComponent } from './page/page.component';
import { CarcardComponent } from './carcard/carcard.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CarformComponent } from './carform/carform.component';
import { RenterformComponent } from './renterform/renterform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetstartedComponent,
    LoginComponent,
    SignupComponent,
    FeedComponent,
    LeftsidebarComponent,
    SearchComponent,
    RightsidebarComponent,
    PageComponent,
    CarcardComponent,
    MapComponent,
    CarformComponent,
    RenterformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
