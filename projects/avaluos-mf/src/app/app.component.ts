import { Component } from '@angular/core';
import { ICharacter } from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'avaluos-mf';

  somethingData = {
    message: 'mensaje validando token',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbk5hbWUiOiJob21lX2FwcCIsImFwcGxpY2F0aW9uSUQiOiJob21lc2IifQ.Mxuiy-GEl_97WCzBGZGzQ0llYQXF1i0IxPx4PORrirQ',
  };

  cardData: ICharacter = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episodes: 30,
  };
}
