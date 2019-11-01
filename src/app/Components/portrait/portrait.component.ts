import { Component, OnInit} from '@angular/core';
import { PersonalInfoService } from '../../Services/personal-info.service';


@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {
  // @Input() rowHeight: number;
  // @Input() rowSpan: number;

  public liveAge: number;
  public liveEmployed: number;
  public liveDegree: number;
  public liveMarried: number;
  public liveFather: number;
  constructor(public me: PersonalInfoService) { }

  ngOnInit() {
    setInterval( () => {
      this.liveAge = this.me.fractionalAge();
      this.liveEmployed = this.me.fractionalAge('March 1, 2010 07:30:00');
      this.liveDegree = this.me.fractionalAge('October 20, 2018 07:30:00');
    }, 100);
  }



}
