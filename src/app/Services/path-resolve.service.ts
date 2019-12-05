import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PathResolveService implements Resolve<string | null> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | null {
    const passedPath = state.url.split('/');
    return `/#/${passedPath[1]}`;
  }
}
