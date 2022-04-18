import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: ICharacter;
  @Input() buttonMessage: string;
  @Output() buttonClick: EventEmitter<ICharacter> = new EventEmitter();

  handleButtonClick() {
    this.buttonClick.emit(this.data);
  }
}
