import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { WebLink } from '../../Model/WebLink';
import { NavigationService } from '../../Services/navigation.service';
import { Router } from '@angular/router';
import { PersonalInfoService } from '../../Services/personal-info.service';
import { PortfolioProject } from '../../Model/PortfolioProject';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})

export class TopBarComponent implements OnInit {
  readonly menus: {
    Home: WebLink;
    Portfolio: WebLink[];
    About: WebLink;
  };
  readonly keys: string[];

  private projPerPage: number;

  constructor(public me: PersonalInfoService,
              public pServe: ProjectsService,
              private nav: NavigationService,
              readonly router: Router) {
    this.menus = {
      Home: null,
      Portfolio: [],
      About: null
    };

    for (const e of this.nav.getBaseRoutes()) {
      this.menus[e.text] = e;
    }

    this.keys = Object.keys(this.menus);

    this.pServe.areProjectsLoaded().then(() => {
      this.populateProjects();
    });

    this.projPerPage = environment.projectsPerPage;

  }

  populateProjects(): void {
    const projectKeys = Object.keys(this.pServe.projects);

    for (const i of projectKeys) {
      const project: PortfolioProject = this.pServe.getProject(i);
      this.menus.Portfolio.push({
        text: project.title,
        link: '/project/' + i
      });
    }

    this.menus.Portfolio = this.menus.Portfolio.sort(
      (x, y) =>
        this.pServe.getProject(y.link.substring(9)).priority - this.pServe.getProject(x.link.substring(9)).priority);

  }

  ngOnInit() {
  }

  arrayTest(val) {
    return Array.isArray(val);
  }

}
