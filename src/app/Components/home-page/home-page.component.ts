import { Component, OnInit } from '@angular/core';
import { WebLink } from '../../Model/WebLink';
import { NavigationService } from '../../Services/navigation.service';

import * as anime from 'animejs/lib/anime';

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
  constructor(private nav: NavigationService) { }

  ngOnInit() {
    this.baseRoutes = this.nav.getBaseRoutes();


    anime.timeline({loop: false})
      .add({
        targets: '.welcome',
        opacity: [0.5, 1],
        scaleY: [0, 1],
        delay: 300,
        easing: 'spring(1, 80, 10, 10)',
        duration: 600
        })
      .add({
        targets: '.welcome-amp',
        opacity: [0, 1],
        scaleY: [0, 1],
        easing: 'spring(1, 80, 10, 15)',
        duration: 100
      }, '-=500')
      .add({
      targets: '.welcome-message',
      opacity: [0.5, 1],
      scaleY: [0, 1],
      easing: 'spring(1, 80, 10, 10)',
      duration: 600
    }, '-=500')      ;
  }



}
