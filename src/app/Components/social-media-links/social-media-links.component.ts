import { Component, OnInit } from '@angular/core';
import { SocialMediaLink } from '../../Model/SocialMediaLink';
import { PersonalInfoService } from '../../Services/personal-info.service';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss']
})
export class SocialMediaLinksComponent implements OnInit {
  socialMedia: SocialMediaLink[];

  constructor(public me: PersonalInfoService) {
  }

  ngOnInit() {
    this.socialMedia = [
      {
        platform: 'Twitter',
        icon: 'icon ion-logo-twitter',
        aria: 'Link to Twitter Account with Twitter Logo'
      },
/*      {
        platform: 'Twitch',
        icon: 'icon ion-logo-twitch',
        aria: 'Link to Twitch Account with Twitch logo'
      },*/
      {
        platform: 'LinkedIn',
        icon: 'icon ion-logo-linkedin',
        aria: 'Link to LinkedIn Account with LinkedIn Logo'
      },
      {
        platform: 'Github',
        icon: 'icon ion-logo-github',
        aria: 'Link to Github Account with Github Logo'
      },
      {
        platform: 'Email',
        icon: 'icon ion-md-mail',
        aria: 'Email mailto link with Envelope Logo'
      }
    ];
  }

  openLink(type: string): void {
    switch (type) {
      case 'Email':
        window.open('mailto:' + this.me.email()[0], '_self');
        break;
      case 'Twitter':
        window.open(this.me.twitter()[1], '_blank');
        break;
      case 'Twitch':
        window.open(this.me.twitch()[1], '_blank');
        break;
      case 'LinkedIn':
        window.open(this.me.linkedIn()[1], '_blank');
        break;
      case 'Github':
        window.open(this.me.github()[1], '_blank');
        break;
      default:
        break;
    }
  }

}
