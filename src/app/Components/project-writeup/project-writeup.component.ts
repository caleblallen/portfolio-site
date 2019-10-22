import { Component, OnInit, Input } from '@angular/core';
import {PortfolioProject} from '../../Model/PortfolioProject';

@Component({
  selector: 'app-project-writeup',
  templateUrl: './project-writeup.component.html',
  styleUrls: ['./project-writeup.component.css']
})
export class ProjectWriteupComponent implements OnInit {
  @Input() project: PortfolioProject;
  constructor() { }

  ngOnInit() {
  }

}
