import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './Components/home-page/home-page.component';
import {PortfolioProjectComponent} from './Components/portfolio-project/portfolio-project.component';
import {BlogHomeComponent} from './Components/blog-home/blog-home.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { ProjectsPageComponent } from './Components/projects-page/projects-page.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsPageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: '', component: HomePageComponent },
  { path: 'project/:id', component: PortfolioProjectComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
