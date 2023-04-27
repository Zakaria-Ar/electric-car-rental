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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { carsReducer } from './ngrx/car.reducer';
import { CarsEffects } from './ngrx/car.effects';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({carsState:carsReducer}),
    EffectsModule.forRoot([CarsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
