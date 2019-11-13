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
  constructor(readonly pServe: ProjectsService) { }

  ngOnInit() {
  }

  public viewSourceCode(): void {
    window.open(this.project.sourceCode.link, '_blank');
  }

  public viewLiveProject(): void {
    window.open(this.project.liveLink.link, '_blank');
  }
}
