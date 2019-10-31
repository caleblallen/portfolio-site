import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebLink } from '../Model/WebLink';



@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  public getBaseRoutes(): WebLink[] {
    let baseRoutes: WebLink[] = [];
    // Examine all Routes
    for (const c of this.router.config) {
      // Omit Routes that have contextual links such as ids.
      if (!c.path.includes(':')) {
        baseRoutes.push(
          {
            title: (c.path === '') ? 'Home' : this.toTitleCase(c.path),
            link: c.path
          });
      }
    }
    return baseRoutes;
  }

  private toTitleCase(str: string): string {
    let collector = '';
    for (const s of str.split(/[.!?]/)) {
      collector += s.charAt(0).toUpperCase() + s.substr(1);
    }
    return collector;
  }
}
