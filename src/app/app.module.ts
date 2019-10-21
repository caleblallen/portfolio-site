import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { PortraitComponent } from './Components/portrait/portrait.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    PortraitComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
