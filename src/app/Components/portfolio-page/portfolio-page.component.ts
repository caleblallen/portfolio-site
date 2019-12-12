import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  public projects: string[];

  constructor(public portfolio: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = [];
    this.route.params.subscribe(routeParams => {
      this.portfolio.areProjectsLoaded().then( () => {
        if (routeParams.frameWork.toString() === 'all') {
          this.projects = this.portfolio.getProjectsList();
        } else {
          this.projects = this.portfolio.projectsByFramework(routeParams.frameWork.toString());
        }
        this.projects = this.projects.sort((x, y) =>
          this.portfolio.getProject(y).priority - this.portfolio.getProject(x).priority);
      });
    });


  }

  viewSourceCodeByKey(key) {
    window.open(this.portfolio.getProject(key).sourceCode.link, '_blank');
  }
}
