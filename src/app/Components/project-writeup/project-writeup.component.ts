import { Component, Input, OnInit } from '@angular/core';
import { PortfolioProject } from '../../Model/PortfolioProject';
import { ProjectsService } from '../../Services/projects.service';

@Component({
  selector: 'app-project-writeup',
  templateUrl: './project-writeup.component.html',
  styleUrls: ['./project-writeup.component.scss']
})
export class ProjectWriteupComponent implements OnInit {
  @Input() project: PortfolioProject;

  constructor(readonly portfolio: ProjectsService) {
  }

  ngOnInit() {
  }

}
