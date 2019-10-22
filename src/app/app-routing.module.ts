import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './Components/home-page/home-page.component';
import {PortfolioProjectComponent} from './Components/portfolio-project/portfolio-project.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'project/:id', component: PortfolioProjectComponent},
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
