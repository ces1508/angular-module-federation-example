import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CardComponent } from './card.component';
import { CardModule as CardModuleP } from 'primeng/card';

@NgModule({
  declarations: [CardComponent, TitleComponent],
  imports: [CommonModule, CardModuleP],
  exports: [CardComponent],
})
export class CardModule {}
