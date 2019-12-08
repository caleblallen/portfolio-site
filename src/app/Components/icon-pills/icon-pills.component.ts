import { Component, Input, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material';


@Component({
  selector: 'app-icon-pills',
  templateUrl: './icon-pills.component.html',
  styleUrls: ['./icon-pills.component.scss']
})
export class IconPillsComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;
  @Input() direction: TooltipPosition;
  @Input() lnk: string;
  constructor() {
  }

  ngOnInit() {
  }

}
