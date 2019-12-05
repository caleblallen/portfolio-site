import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../Services/personal-info.service';


@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {
  // @Input() rowHeight: number;
  // @Input() rowSpan: number;


  constructor(public me: PersonalInfoService) {
  }

  ngOnInit() {

  }


}
