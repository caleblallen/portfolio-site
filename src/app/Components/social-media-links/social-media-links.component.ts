import { Component, OnInit } from '@angular/core';
import {SocialMediaLink} from '../../Model/SocialMediaLink';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss']
})
export class SocialMediaLinksComponent implements OnInit {
  socialMedia: SocialMediaLink[];
  constructor() { }

  ngOnInit() {
    this.socialMedia = [
      {
        icon: 'icon ion-logo-twitter',
        aria: 'Link to Twitter Account with Twitter Logo'
      },
      {
        icon: 'icon ion-logo-twitch',
        aria: 'Link to Twitch Account with Twitch logo'
      },
      {
        icon: 'icon ion-logo-linkedin',
        aria: 'Link to LinkedIn Account with LinkedIn Logo'
      },
      {
        icon: 'icon ion-logo-github',
        aria: 'Link to Github Account with Github Logo'
      },
      {
        icon: 'icon ion-md-mail',
        aria: 'Email mailto link with Envelope Logo'
      }
    ];
  }

}
