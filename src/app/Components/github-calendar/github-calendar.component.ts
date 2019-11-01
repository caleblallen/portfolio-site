import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../Services/personal-info.service';
import * as GitHubCalendar from 'github-calendar';

@Component({
  selector: 'app-github-calendar',
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.scss']
})
export class GithubCalendarComponent implements OnInit {

  constructor(private me: PersonalInfoService) { }

  ngOnInit() {
    GitHubCalendar('.github-calendar', this.me.github()[0], {
      global_stats: true,
      responsive: true
    });
  }
}
