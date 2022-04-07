import { Directive, ElementRef, Input } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { VALID_APP_IDS } from '../../constants/validateAppIds';
import { IToken } from '../../models/token.model';

@Directive({
  selector: '[appValidateToken]',
})
export class ValidateTokenDirective {
  @Input() appValidateToken: string;
  @Input() token: string;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.validateToken(this.token, this.element);
  }

  private validateToken(token: string, element: ElementRef): void {
    try {
      const decodeToken: IToken = jwt_decode(token);
      if (
        decodeToken &&
        decodeToken.applicationID &&
        VALID_APP_IDS.has(decodeToken.applicationName)
      ) {
        if (
          VALID_APP_IDS.get('decodeToken.applicationName') ===
          decodeToken.applicationID
        )
          return;
      }
    } catch (e) {
      console.warn(e.message);
    }

    this.removeElement(element);
  }
  private removeElement(element: ElementRef) {
    element.nativeElement.remove();
  }
}
