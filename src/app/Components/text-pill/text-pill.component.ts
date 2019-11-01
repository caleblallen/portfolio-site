import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-pill',
  templateUrl: './text-pill.component.html',
  styleUrls: ['./text-pill.component.scss']
})
export class TextPillComponent implements OnInit {
  @Input() public left: string;
  @Input() public right: string;
  constructor() { }

  ngOnInit() {
  }

}
