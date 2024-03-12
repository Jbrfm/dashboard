import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  isSideCollapsed = false;
  screenWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideCollapsed = data.collapsed;
  }
}
