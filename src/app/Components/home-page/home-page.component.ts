import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { WebLink } from '../../Model/WebLink';
import { NavigationService } from '../../Services/navigation.service';
import { PersonalInfoService } from '../../Services/personal-info.service';
import { isPlatformBrowser } from '@angular/common';

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
  }

  ngOnInit() {
    this.baseRoutes = this.nav.getBaseRoutes();
  }

}
