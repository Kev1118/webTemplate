import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, state, style, } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-out') ),
    ])
  ]
})
export class NavbarComponent implements OnInit {

  mobileLinkDisplay = 'none';
  show = false;
  windowWidth: any;
  dividerVertical = true;

  constructor() { }

  ngOnInit(): void {
    this.checkDeviceSize();
  }
  // tslint:disable-next-line: typedef
  mobileMenuPress() {
    if (this.mobileLinkDisplay === 'none') {
      this.mobileLinkDisplay = 'flex';
    } else {
      this.mobileLinkDisplay = 'none';
    }
    this.show = !this.show;
  }
  // tslint:disable-next-line: typedef
  get stateName() {
    return this.show ? 'show' : 'hide';
  }
  checkDeviceSize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 800) {
      this.dividerVertical = false;
    } else {
      this.dividerVertical = true;
    }
  }
}
