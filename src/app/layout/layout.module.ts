import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardBodyComponent } from './components/dashboard-body/dashboard-body.component';
import { DashboardSidenavComponent } from './components/dashboard-sidenav/dashboard-sidenav.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardBodyComponent,
    DashboardSidenavComponent,
    DashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NotifierModule
  ],
  exports: [
    DashboardLayoutComponent
  ]
})
export class LayoutModule { }
