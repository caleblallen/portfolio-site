import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  public test: string;
  private menus: {};
  private keys: string[];
  constructor() {
    this.test = '123';
  }

  ngOnInit() {
/*    this.menus = {
      Portfolio: [['item1', 'href'], ['item2', 'href']]
    };*/
    // this.menus = [['item1', 'href'], ['item2', 'href']];
    this.menus = {
      Portfolio: [
        {
          title: 'Item1',
          link: 'href://'
        },
        {
          title: 'Item2',
          link: 'href://'
        }
      ],
      Blog: [
        {}
      ],
      Other: [
        {}
      ]
    };
    this.keys = Object.keys(this.menus);
  }


}
