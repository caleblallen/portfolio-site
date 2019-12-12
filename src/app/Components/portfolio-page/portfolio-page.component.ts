import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  public projects: string[];
  public pageNumber: number;
  public projPerPage: number;
  public frameWork: string;
  constructor(public portfolio: ProjectsService, private route: ActivatedRoute) {
    this.projPerPage = environment.projectsPerPage;
  }

  ngOnInit() {
    this.projects = [];
    this.route.params.subscribe(routeParams => {
      // Handle Paging
      if (routeParams.page) {
        this.pageNumber = Number(routeParams.page);
      } else {
        this.pageNumber = 1;
      }

      this.frameWork = routeParams.frameWork;

      // Display projects after they are loaded from the Database.
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

  hasPreviousPage() {
    return this.pageNumber > 1;
  }


  hasNextPage() {
    return this.projects.length > this.pageNumber * this.projPerPage;
  }
}
