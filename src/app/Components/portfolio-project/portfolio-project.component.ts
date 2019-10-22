import { Component, OnInit } from '@angular/core';
import {PortfolioProject} from '../../Model/PortfolioProject';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../Services/projects.service';


@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {
  project: PortfolioProject;
  constructor(private route: ActivatedRoute, private portfolio: ProjectsService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.portfolio.getProject(id.toString());
    console.log(id);
    console.log(this.project);
  }

}