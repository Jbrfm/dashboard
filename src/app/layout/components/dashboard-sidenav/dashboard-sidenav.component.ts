import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { navbarData } from '../nav-data';

interface SideNavToggle {
  screenWidth: number,
  collapsed: boolean
}

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }
    else {
      this.collapsed = true;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
    }
    else {
      this.collapsed = true;
    }
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
}
