import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CardModule } from '../../components/card/card.module';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule, CardModule, PaginatorModule],
})
export class CharactersModule {}
