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
  private readonly projectsLoaded: Promise<boolean>;
  private readonly frameworkIcons: object;
  private readonly keysByFramework: {
    [frameWork: string]: string[];
  };

  constructor(private http: HttpClient) {
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
    this.keysByFramework = {};
  }


  sanitizeFrameWork(frameWork: string): string {
    const translation = [
      ['#', 'sharp'],
      ['+', 'plus'],
      ['.', 'dot'],
    ];

    let fw = frameWork.toLowerCase();

    for (const l of translation) {
      fw = fw.replace(l[0], l[1]);
    }

    return fw;
  }

  getProject(key): PortfolioProject {
    return this.projects[key];
  }

  getProjectsList(): string[] {
    return Object.keys(this.projects);
  }

  projectsByFramework(frameWork: string): string[] {
    const sanitizedFrameWork = this.sanitizeFrameWork(frameWork);
    // Populate the hashmap only once, and only if needed.
    if (this.keysByFramework && !(this.sanitizeFrameWork(sanitizedFrameWork) in this.keysByFramework)) {
      for (const key of Object.keys(this.projects)) {
        for (const f of this.projects[key].frameWorks) {
          const fw = this.sanitizeFrameWork(f);
          if (fw in this.keysByFramework) {
            this.keysByFramework[fw].push(key);
          } else {
            this.keysByFramework[fw] = [key];
          }
        }
      }
    }
    // After the hashmap is populated, return the hashmaps by framework.
    return (sanitizedFrameWork in this.keysByFramework) ? this.keysByFramework[sanitizedFrameWork] : [];
  }

  public areProjectsLoaded(): Promise<boolean> {
    return this.projectsLoaded;
  }

  getFrameworkIcon(key): string {
    key = key.toLowerCase().replace(' ', '');
    return this.frameworkIcons[key];
  }
}
