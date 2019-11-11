import { Component, OnInit, Input } from '@angular/core';
import { PortfolioProject } from '../../Model/PortfolioProject';
import { Lightbox } from 'ngx-lightbox';
import { GalleryPhoto } from '../../Model/GalleryPhoto';
import { ProjectsService } from '../../Services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-title-anchor',
  templateUrl: './project-title-anchor.component.html',
  styleUrls: ['./project-title-anchor.component.scss']
})
export class ProjectTitleAnchorComponent implements OnInit {
  // @Input() project: PortfolioProject;
  project: PortfolioProject;
  private photo: GalleryPhoto;
  constructor(private lightBox: Lightbox, private route: ActivatedRoute, private portfolio: ProjectsService) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.project = this.portfolio.getProject(routeParams.id.toString());
      this.photo = {
        src: this.getAnchorImagePath(this.project.anchorImage),
        caption: `Picture of ${ this.project.title } in action`,
        thumb: 'assets/img/' + this.project.anchorImage
      };
    });

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
