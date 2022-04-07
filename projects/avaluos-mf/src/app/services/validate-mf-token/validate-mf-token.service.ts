import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { VALID_APP_IDS } from '../../constants/validateAppIds';
import { IToken } from '../../models/token.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class ValidateMfTokenService {
  public isValidToken: ReplaySubject<boolean> = new ReplaySubject();
  constructor() {
    this.isValidToken.next(false);
  }

  validateToken(token: string) {
    try {
      const decodeToken: IToken = jwt_decode(token);
      if (
        decodeToken &&
        decodeToken.applicationID &&
        VALID_APP_IDS.has(decodeToken.applicationName)
      ) {
        if (
          VALID_APP_IDS.get(decodeToken.applicationName) ===
          decodeToken.applicationID
        )
          this.isValidToken.next(true);
      } else {
        throw new Error('invalid token');
      }
    } catch (e) {
      console.log('algo fallo con el error ', e.message);

      this.isValidToken.next(false);
    }
  }
}
