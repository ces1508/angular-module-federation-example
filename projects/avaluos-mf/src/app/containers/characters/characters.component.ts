import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../models/character.model';
import { IRickAndMortyResponse } from '../../models/response-rick-and-morty.model';
import { RickAndMortyService } from '../../services/rick-and-morty/rick-and-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  pages: number = 1;
  quantity: number = 1;
  quantityPerPage: number = 20;
  characters: ICharacter[];
  constructor(public rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(page: number = 1) {
    this.rickAndMortyService
      .getAllCharacters(page)
      .subscribe((response: IRickAndMortyResponse) => {
        this.characters = response.results.map((character) => {
          return character;
        });
        this.quantity = response.info.count;
      });
  }
}
