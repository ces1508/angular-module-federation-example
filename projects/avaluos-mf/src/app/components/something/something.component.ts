import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ValidateMfTokenService } from '../../services/validate-mf-token/validate-mf-token.service';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss'],
})
export class SomethingComponent implements OnInit {
  @Input() data: {
    message: string;
    token: string;
  };
  @Output() onHandleClick: EventEmitter<string> = new EventEmitter();
  @Output() onHandleClick2: EventEmitter<number> = new EventEmitter();
  constructor(public validateTokenService: ValidateMfTokenService) {}

  ngOnInit(): void {
    this.validateTokenService.validateToken(this.data.token);
    this.validateTokenService.isValidToken.subscribe((value) => {
      if (value) this.setup();
    });
  }

  private setup() {
    console.log('esto solo deberia salir cuando esta validado por el token');
  }

  handleButtonClick() {
    this.onHandleClick.emit('evento enviando desde un microfront');
  }
  handleButtonClick2() {
    this.onHandleClick2.emit(10);
  }
}
