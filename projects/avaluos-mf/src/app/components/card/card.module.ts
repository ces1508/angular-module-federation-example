import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent, TitleComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class CardModule {}
