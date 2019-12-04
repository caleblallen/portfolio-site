import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../Services/personal-info.service';

@Component({
  selector: 'app-about-at-a-glance',
  templateUrl: './about-at-a-glance.component.html',
  styleUrls: ['./about-at-a-glance.component.scss']
})
export class AboutAtAGlanceComponent implements OnInit {
  public liveAge: number;
  public liveEmployed: number;
  public liveDegree: number;
  constructor(public me: PersonalInfoService) {
    this.liveAge = 0;
    this.liveEmployed = 0;
    this.liveDegree = 0;
  }

  ngOnInit() {
    setInterval( () => {
      this.liveAge = this.me.fractionalAge();
      this.liveEmployed = this.me.fractionalAge('March 1, 2010 07:30:00');
      this.liveDegree = this.me.fractionalAge('October 20, 2018 07:30:00');
    }, 100);
  }

}
