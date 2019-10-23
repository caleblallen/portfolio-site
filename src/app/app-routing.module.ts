import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './Components/home-page/home-page.component';
import {PortfolioProjectComponent} from './Components/portfolio-project/portfolio-project.component';
import {BlogHomeComponent} from './Components/blog-home/blog-home.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'project/:id', component: PortfolioProjectComponent},
  { path: 'blog', component: BlogHomeComponent}
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
