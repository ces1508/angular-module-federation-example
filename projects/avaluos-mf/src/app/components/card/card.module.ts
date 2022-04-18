import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CardComponent } from './card.component';
import { CardModule as CardModuleP } from 'primeng/card';
import { DotStatusModule } from '../dot-status/dot-status.module';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [CardComponent, TitleComponent],
  imports: [CommonModule, CardModuleP, DotStatusModule, ButtonModule],
  exports: [CardComponent],
})
export class CardModule {}
