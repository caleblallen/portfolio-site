import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { WebLink } from '../../Model/WebLink';
import { NavigationService } from '../../Services/navigation.service';
import { Router } from '@angular/router';

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

  constructor(private pServe: ProjectsService, private nav: NavigationService, private router: Router) {
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

    const projectKeys = Object.keys(this.pServe.projects);

    for (const i of projectKeys) {
      const project = this.pServe.getProject(i);
      // TODO: Refactor so this is a safe reference.
      this.menus.Portfolio.push( {
        title: project.title,
        link: '/project/' + i
      });
    }
  }

  ngOnInit() { }

  arrayTest(val) { return Array.isArray(val); }
}
