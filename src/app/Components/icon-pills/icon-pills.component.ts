import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-pills',
  templateUrl: './icon-pills.component.html',
  styleUrls: ['./icon-pills.component.scss']
})
export class IconPillsComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;
  @Input() direction: string;
  constructor() {}

  ngOnInit() {
  }

}
