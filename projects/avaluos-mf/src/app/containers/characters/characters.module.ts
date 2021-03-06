import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CardModule } from '../../components/card/card.module';
import { PaginatorModule } from 'primeng/paginator';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [CharactersComponent, DetailComponent],
  imports: [CommonModule, CharactersRoutingModule, CardModule, PaginatorModule],
})
export class CharactersModule {}
