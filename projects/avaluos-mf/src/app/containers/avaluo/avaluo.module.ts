import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaluoRoutingModule } from './avaluo-routing.module';
import { AvaluoComponent } from './avaluo.component';
import { CardModule } from '../../components/card/card.module';

@NgModule({
  declarations: [AvaluoComponent],
  imports: [CommonModule, AvaluoRoutingModule, CardModule],
})
export class AvaluoModule {}
