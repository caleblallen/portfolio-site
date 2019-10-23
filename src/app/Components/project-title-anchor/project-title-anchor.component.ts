import { Component, OnInit, Input } from '@angular/core';
import {PortfolioProject} from '../../Model/PortfolioProject';

@Component({
  selector: 'app-project-title-anchor',
  templateUrl: './project-title-anchor.component.html',
  styleUrls: ['./project-title-anchor.component.scss']
})
export class ProjectTitleAnchorComponent implements OnInit {
  @Input() project: PortfolioProject;
  constructor() { }

  ngOnInit() {
  }

}
