import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PortfolioProjectComponent } from './Components/portfolio-project/portfolio-project.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { PortfolioPageComponent } from './Components/portfolio-page/portfolio-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, data: {animation: 'HomePage'}},
  {path: 'portfolio', component: PortfolioPageComponent, data: {animation: 'OtherPage'}},
  {path: 'about', component: AboutPageComponent, data: {animation: 'OtherPage'}},
  {path: 'project/:id', component: PortfolioProjectComponent, data: {animation: 'OtherPage'}},
  {path: '**', component: PageNotFoundComponent, data: {animation: 'OtherPage'}},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
