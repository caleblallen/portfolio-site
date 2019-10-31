import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideUp } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideUp]
})
export class AppComponent {
  title = 'calebAllenDotCom';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
}
}
