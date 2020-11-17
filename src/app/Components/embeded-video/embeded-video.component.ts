import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-embeded-video',
  templateUrl: './embeded-video.component.html',
  styleUrls: ['./embeded-video.component.scss']
})
export class EmbededVideoComponent implements OnInit {
  @Input() lnk: string;

  constructor() {
  }

  ngOnInit() {
  }

}
