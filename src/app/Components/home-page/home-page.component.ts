import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { WebLink } from '../../Model/WebLink';

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
  constructor(private router: Router) { }

  ngOnInit() {
    this.baseRoutes = [];
    // Examine all Routes
    for (const c of this.router.config) {
      // Omit Routes that have contextual links such as ids.
      if (!c.path.includes(':')) {
        this.baseRoutes.push(
          {
            title: (c.path === '') ? 'Home' : this.toTitleCase(c.path),
            link: c.path
          });
      }
    }

    anime.timeline({loop: false})
      .add({
        targets: '.welcome',
        opacity: [0.5, 1],
        scaleY: [0, 1],
        easing: 'spring(1, 80, 10, 0)',
        duration: 600
        })
      .add({
        targets: '.welcome-amp',
        opacity: [0, 1],
        scaleY: [0, 1],
        easing: 'spring(1, 80, 10, 0)',
        duration: 700
      }, '-=300')
      .add({
      targets: '.welcome-message',
      opacity: [0.5, 1],
      scaleY: [0, 1],
      easing: 'spring(1, 80, 10, 0)',
      duration: 300
    }, '-=300')      ;
  }


  toTitleCase(str: string) {
    let collector = '';
    for (const s of str.split(/[.!?]/)) {
      collector += s.charAt(0).toUpperCase() + s.substr(1);
    }
    return collector;
  }
}
