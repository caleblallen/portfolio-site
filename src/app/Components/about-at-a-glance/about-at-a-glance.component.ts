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
    // Default to prevent errors with undefined values
    this.liveAge = 0;
    this.liveEmployed = 0;
    this.liveDegree = 0;
  }

  ngOnInit() {
    // Update age to an absurd degree of accuracy. :)
    setInterval(() => {
      this.liveAge = this.me.yearsOld();
      this.liveEmployed = this.me.yearsEmployed();
      this.liveDegree = this.me.yearsGraduate();
    }, 100);
  }

}
