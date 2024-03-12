import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ModalComponent } from './components/modal/modal.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { TimesDirective } from './directives/times.directive';
import { DividerComponent } from './components/divider/divider.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    ModalComponent,
    PlaceholderComponent,
    TimesDirective,
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent,
    ModalComponent,
    PlaceholderComponent,
    DividerComponent
  ]
})
export class SharedModule { }
