import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvaluoComponent } from './avaluo.component';

const routes: Routes = [
  {
    path: '',
    component: AvaluoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaluoRoutingModule {}
