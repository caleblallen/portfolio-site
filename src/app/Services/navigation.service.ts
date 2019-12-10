import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebLink } from '../Model/WebLink';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  private toTitleCase(str: string): string {
    let collector = '';
    for (const s of str.split(/[.!?]/)) {
      collector += s.charAt(0).toUpperCase() + s.substr(1);
    }
    return collector;
  }

  public getBaseRoutes(): WebLink[] {
    const baseRoutes: WebLink[] = [];
    // Examine all Routes
    for (const c of this.router.config) {
      // Omit Routes that have contextual links such as ids.
      if (!c.path.includes(':') && !c.path.includes('**')) {
        baseRoutes.push(
          {
            text: (c.path === '') ? 'Home' : this.toTitleCase(c.path),
            link: c.path
          });
      }
    }
    return baseRoutes;
  }
}
