import { Injectable } from '@angular/core';
import { PortfolioProject } from '../Model/PortfolioProject';
import * as fwIcons from '../Configurations/FrameworkIcons';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const env = environment;


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: {};
  private projectsLoaded: Promise<boolean>;
  private readonly frameworkIcons: object;

  constructor(private http: HttpClient) {
    // TODO: Re-evaluate this injection.
    this.frameworkIcons = fwIcons.FrameworkIcons;
    this.projects = {};
    this.projectsLoaded = new Promise<boolean>((resolve, reject) => {
      this.http.get(env.projectsURL).subscribe((data: any[]) => {
        for (const d of data) {
          this.projects[d.title.replace(/[\s-()]/g, '')] = d as PortfolioProject;
        }
        resolve(true);
      });
    });
  }

  getProject(key): PortfolioProject {
    return this.projects[key];
  }

  public areProjectsLoaded(): Promise<boolean> {
    return this.projectsLoaded;
  }

  getFrameworkIcon(key): string {
    key = key.toLowerCase().replace(' ', '');
    return this.frameworkIcons[key];
  }
}
