import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import * as ddl from 'css-doodle';

@Component({
  selector: 'app-homepage-doodle',
  templateUrl: './homepage-doodle.component.html',
  styleUrls: ['./homepage-doodle.component.scss']
})
export class HomepageDoodleComponent implements OnInit, AfterViewInit {
  readonly isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    if (this.isBrowser) {
      import('css-doodle').then( () => {
        this.runDoodle();
      });
    }
  }

  private runDoodle() {
    const doodle: ddl.Doodle = document.querySelector('css-doodle');

    let hue = Math.floor(Math.random() * 240);

    doodle.update(
      `:doodle {
            @grid:  9x60 / 100vmax 30vmax;
            background: #EBF2FA;
          }
          transition: .6s @r(1s);
          --hue: calc( ${ hue % 240 } + .5 * @row() * @col());
          background: hsla(var(--hue),50%, 70%, @r(.1, .9));
          clip-path: ellipse(100% 100% at @pick('0 0', '0 100%', '100% 0', '100% 100%'))`);

    hue += 30;

    setInterval( () => {

      doodle.update(
        `:doodle {
            @grid:  9x60 / 100vmax 30vmax;
            background: #EBF2FA;
          }
          transition: .6s @r(1s);
          --hue: calc( ${ hue % 240 } + .5 * @row() * @col());
          background: hsla(var(--hue),50%, 70%, @r(.1, .9));
          clip-path: ellipse(100% 100% at @pick('0 0', '0 100%', '100% 0', '100% 100%'))`);

      hue += 30;
    }, 2000);

  }

}
