import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ValidateMfTokenService } from '../../services/validate-mf-token/validate-mf-token.service';

@Component({
  selector: 'app-something-secure',
  templateUrl: './something-secure.component.html',
  styleUrls: ['./something-secure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomethingSecureComponent implements OnInit {
  @Input() data: {
    message: string;
    token: string;
  };
  constructor(public validateTokenService: ValidateMfTokenService) {}

  ngOnInit(): void {
    this.validateTokenService.validateToken(this.data.token);
  }
}
