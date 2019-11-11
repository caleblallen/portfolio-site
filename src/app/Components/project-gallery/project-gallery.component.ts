import { Component, OnInit, Input } from '@angular/core';
import { PortfolioProject } from '../../Model/PortfolioProject';
import { Lightbox } from 'ngx-lightbox';
import { GalleryPhoto } from '../../Model/GalleryPhoto';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../Services/projects.service';


@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {
  album: GalleryPhoto[];
  currentProject: PortfolioProject;

  constructor(private lightBox: Lightbox, private route: ActivatedRoute, private portfolio: ProjectsService) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.currentProject = this.portfolio.getProject(routeParams.id);
      this.album = [];
      this.generateAlbums(this.currentProject.gallery);
    });
  }
  private generateAlbums(files): void {
    for (const f of files) {
      const photo = {
        src: 'assets/img/' + f,
        caption: 'Caption for ' + f,
        thumb: 'assets/img/thumbs/' + f
      };

      this.album.push(photo);
    }
  }
  open(index: number): void {
    this.lightBox.open(this.album, index);
  }
  close(): void {
    // close lightbox programmatically
    this.lightBox.close();
  }
}
