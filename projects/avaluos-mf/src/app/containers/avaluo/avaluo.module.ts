import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaluoRoutingModule } from './avaluo-routing.module';
import { AvaluoComponent } from './avaluo.component';

@NgModule({
  declarations: [AvaluoComponent],
  imports: [CommonModule, AvaluoRoutingModule],
})
export class AvaluoModule {}
