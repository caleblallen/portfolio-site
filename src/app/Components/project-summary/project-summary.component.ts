import { Component, OnInit, Input } from '@angular/core';
import {ProjectsService} from '../../Services/projects.service';
import {PortfolioProject} from '../../Model/PortfolioProject';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {
  @Input() project: PortfolioProject;
  constructor(private pServe: ProjectsService) { }

  ngOnInit() {
  }

}
