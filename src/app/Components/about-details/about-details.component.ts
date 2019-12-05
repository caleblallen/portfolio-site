import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../Services/personal-info.service';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.scss']
})
export class AboutDetailsComponent implements OnInit {

  constructor(public me: PersonalInfoService) {
  }

  ngOnInit() {


  }

  public formatTechnologyEntries(key): string {
    let accumulator = '';
    for (const det of this.me.technologySpecifics[key].details) {
      accumulator += `<span class=""`;
    }
    return '';
  }
}
