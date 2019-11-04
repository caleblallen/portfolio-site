import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../Services/personal-info.service';

@Component({
  selector: 'app-about-technology-specifics',
  templateUrl: './about-technology-specifics.component.html',
  styleUrls: ['./about-technology-specifics.component.scss']
})
export class AboutTechnologySpecificsComponent implements OnInit {

  constructor(public me: PersonalInfoService) { }

  ngOnInit() {
  }

}
