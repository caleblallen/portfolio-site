import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { PortfolioProject } from '../../Model/PortfolioProject';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  public projects: PortfolioProject[];

  constructor(public portfolio: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = [];
    this.route.params.subscribe(routeParams => {
      this.portfolio.areProjectsLoaded().then( () => {
        for (const title of this.portfolio.projectsByFramework(routeParams.frameWork.toString())) {
          this.projects.push(this.portfolio.getProject(title));
        }
      });
    });
  }

}
