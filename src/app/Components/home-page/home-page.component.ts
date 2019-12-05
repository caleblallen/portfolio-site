import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { WebLink } from '../../Model/WebLink';
import { NavigationService } from '../../Services/navigation.service';
/*import 'css-doodle';
import Doodle from 'css-doodle';*/
import { PersonalInfoService } from '../../Services/personal-info.service';
import { isPlatformBrowser } from '@angular/common';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public baseRoutes: WebLink[];
  public isBrowser: boolean;

  constructor(private nav: NavigationService, public me: PersonalInfoService, @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
    console.log('is browser=', this.isBrowser);
  }

  ngOnInit() {
    this.baseRoutes = this.nav.getBaseRoutes();

    if (this.isBrowser) {

    }
  }

}
