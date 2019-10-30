import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

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

  constructor() { }

  ngOnInit() {
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
/*

    anime.timeline({loop: true})
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: 'easeInOutExpo',
        duration: 700
      }).add({
      targets: '.ml5 .line',
      duration: 600,
      easing: 'easeOutExpo',
      translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + 'em'
    })/!*.add({
      targets: '.ml5 .ampersand',
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=600'
    })*!/.add({
      targets: '.ml5 .letters-left',
      opacity: [0, 1],
      translateX: ['0.5em', 0],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=300'
    }).add({
      targets: '.ml5 .letters-right',
      opacity: [0,1],
      translateX: ['-0.5em', 0],
      easing: 'easeOutExpo',
      duration: 600,
      offset: '-=600'
    }).add({
      targets: '.ml5',
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
      delay: 1000
    });
*/

  }


}
