import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaluoRoutingModule } from './avaluo-routing.module';
import { AvaluoComponent } from './avaluo.component';
import { SomethingComponent } from '../../components/something/something.component';

@NgModule({
  declarations: [AvaluoComponent, SomethingComponent],
  imports: [CommonModule, AvaluoRoutingModule],
})
export class AvaluoModule {}
