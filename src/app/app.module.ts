import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatExpansionModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
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
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProjectTitleAnchorComponent } from './Components/project-title-anchor/project-title-anchor.component';
// import 'hammerjs';
import { BlogHomeComponent } from './Components/blog-home/blog-home.component';
import { ProjectGalleryComponent } from './Components/project-gallery/project-gallery.component';
import { LightboxModule } from 'ngx-lightbox';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { PortfolioPageComponent } from './Components/portfolio-page/portfolio-page.component';
import { AboutDetailsComponent } from './Components/about-details/about-details.component';
import { GithubCalendarComponent } from './Components/github-calendar/github-calendar.component';
import { AboutAtAGlanceComponent } from './Components/about-at-a-glance/about-at-a-glance.component';
import { TextPillComponent } from './Components/text-pill/text-pill.component';
import { AboutTechnologySpecificsComponent } from './Components/about-technology-specifics/about-technology-specifics.component';
import { FileAttachmentsComponent } from './Components/file-attachments/file-attachments.component';
import { HttpClientModule } from '@angular/common/http';



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
    ProjectTitleAnchorComponent,
    BlogHomeComponent,
    ProjectGalleryComponent,
    ProjectGalleryComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    AboutDetailsComponent,
    GithubCalendarComponent,
    AboutAtAGlanceComponent,
    TextPillComponent,
    AboutTechnologySpecificsComponent,
    FileAttachmentsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
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
    MatListModule,
    MatRippleModule,
    MatTooltipModule,
    LightboxModule,
    MatExpansionModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
