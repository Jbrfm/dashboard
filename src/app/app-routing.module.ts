import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  // FOR LANDING PAGE
  // {  
  //   path: '',
  //   component: layoutComponent,
  //   loadChildren: () => import('').then()
  // },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
