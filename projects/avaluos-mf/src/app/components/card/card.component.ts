import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from '../../models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: ICharacter;
  ngOnInit(): void {}
}
