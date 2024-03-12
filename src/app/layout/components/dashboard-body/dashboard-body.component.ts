import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss']
})
export class DashboardBodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getBodyClass() {
    if (this.collapsed && this.screenWidth > 768) {
      return 'body-trimmed';
    }
    else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      return ' body-md-screen';
    }

    return '';
  }
}
