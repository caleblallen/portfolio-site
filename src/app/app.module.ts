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
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomepageTitleBarComponent } from './Components/homepage-title-bar/homepage-title-bar.component';
import {MatDividerModule} from '@angular/material/divider';
import { SocialMediaLinksComponent } from './Components/social-media-links/social-media-links.component';
import { PortfolioProjectComponent } from './Components/portfolio-project/portfolio-project.component';
import { ProjectWriteupComponent } from './Components/project-writeup/project-writeup.component';
import { ProjectSummaryComponent } from './Components/project-summary/project-summary.component';
import { MarkdownModule} from 'ngx-markdown';
import {MatListModule} from '@angular/material/list';
import { IconPillsComponent } from './Components/icon-pills/icon-pills.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    PortraitComponent,
    HomepageTitleBarComponent,
    SocialMediaLinksComponent,
    PortfolioProjectComponent,
    ProjectWriteupComponent,
    ProjectSummaryComponent,
    IconPillsComponent,
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
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MarkdownModule.forRoot(),
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
