import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { WebLink } from '../../Model/WebLink';
import { NavigationService } from '../../Services/navigation.service';
import { Router } from '@angular/router';
import { PersonalInfoService } from '../../Services/personal-info.service';

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

  constructor(public me: PersonalInfoService,
              public pServe: ProjectsService,
              private nav: NavigationService,
              readonly router: Router) {
    this.menus = {
      Home: null,
      Portfolio: null,
      About: null
    };

    for (const e of this.nav.getBaseRoutes()) {
      if (e.title === 'Portfolio') {
        this.menus[e.title] = [];
      } else {
        this.menus[e.title] = e;
      }
    }

    this.keys = Object.keys(this.menus);

    this.pServe.areProjectsLoaded().then(() => {
      this.populateProjects();
    });

  }

  populateProjects(): void {
    const projectKeys = Object.keys(this.pServe.projects);

    for (const i of projectKeys) {
      const project = this.pServe.getProject(i);
      this.menus.Portfolio.push({
        title: project.title,
        link: '/project/' + i
      });
    }
  }

  ngOnInit() {
  }

  arrayTest(val) {
    return Array.isArray(val);
  }

}
