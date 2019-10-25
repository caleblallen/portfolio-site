import { Component, OnInit, Input } from '@angular/core';
import { PortfolioProject } from '../../Model/PortfolioProject';
import { Lightbox } from 'ngx-lightbox';
import { GalleryPhoto } from '../../Model/GalleryPhoto';

@Component({
  selector: 'app-project-title-anchor',
  templateUrl: './project-title-anchor.component.html',
  styleUrls: ['./project-title-anchor.component.scss']
})
export class ProjectTitleAnchorComponent implements OnInit {
  @Input() project: PortfolioProject;
  private photo: GalleryPhoto;
  constructor(private lightBox: Lightbox) { }

  ngOnInit() {
    this.photo = {
      src: this.getAnchorImagePath(this.project.anchorImage),
      caption: `Picture of ${ this.project.title } in action`,
      thumb: 'assets/img/' + this.project.anchorImage
    };
  }
  open(): void {
    this.lightBox.open([this.photo], 0);
  }
  close(): void {
    // close lightbox programmatically
    this.lightBox.close();
  }
  getAnchorImagePath(path): string {
    return 'assets/img/' + path;
  }

}
