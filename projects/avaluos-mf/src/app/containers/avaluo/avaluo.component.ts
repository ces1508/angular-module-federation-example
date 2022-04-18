import { Component } from '@angular/core';
import { ICharacter } from '../../models/character.model';
import { RickAndMortyService } from '../../services/rick-and-morty/rick-and-morty.service';

@Component({
  selector: 'app-avaluo',
  templateUrl: './avaluo.component.html',
  styleUrls: ['./avaluo.component.scss'],
})
export class AvaluoComponent {
  constructor(private rmService: RickAndMortyService) {}

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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rmService.getAllCharacters().subscribe((data) => console.log(data));
  }
}
