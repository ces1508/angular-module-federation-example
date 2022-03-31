import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss'],
})
export class SomethingComponent {
  @Input() data: string;
  @Output() onHandleClick: EventEmitter<string> = new EventEmitter();
  @Output() onHandleClick2: EventEmitter<number> = new EventEmitter();
  constructor() {}

  handleButtonClick() {
    this.onHandleClick.emit('evento enviando desde un microfront');
  }
  handleButtonClick2() {
    this.onHandleClick2.emit(10);
  }
}
