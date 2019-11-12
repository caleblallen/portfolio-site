import { Component, OnInit, Input } from '@angular/core';
import { WebLink } from '../../Model/WebLink';
import {PortfolioProject} from '../../Model/PortfolioProject';

@Component({
  selector: 'app-file-attachments',
  templateUrl: './file-attachments.component.html',
  styleUrls: ['./file-attachments.component.scss']
})
export class FileAttachmentsComponent implements OnInit {
  @Input() private project: PortfolioProject;
  public files: WebLink[];
  constructor() {
  }

  ngOnInit() {
    this.files = this.project.documents;
  }

}
