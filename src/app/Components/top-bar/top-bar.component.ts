import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../Services/projects.service';
import { WebLink } from '../../Model/WebLink';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})

export class TopBarComponent implements OnInit {
  public test: string;
  private menus: {
    Portfolio: WebLink[];
    Blog: WebLink[];
  };
  private keys: string[];
  constructor(private pServe: ProjectsService) {
    this.test = '123';
  }


  ngOnInit() {

    this.menus = {
      Portfolio: [],
      Blog: []
    };

    const projectKeys = Object.keys(this.pServe.projects);

    for (const i of projectKeys) {
      const project = this.pServe.getProject(i);
      this.menus.Portfolio.push( {
        title: project.title,
        link: '/project/' + i
      });
    }

    this.keys = Object.keys(this.menus);
  }


}
