import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  IEventHandler,
  IRemoteComponent,
} from '../../models/remoteComponent.model';
import {
  ISomethingComponentInput,
  SomethingComponentEventsNames,
} from '../../models/something-component.model';
import { avaluosMf } from '../../constants/microfrontend';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('cardContainer', { read: ViewContainerRef, static: true })
  cardContainer: ViewContainerRef;
  title: string = 'Shell';

  counter = 1;
  counter2 = 2;

  handleIncrement = () => {
    this.counter++;
  };

  redirectToAvaluos = () => {
    this.router.navigate(['/avaluos']);
  };

  handleIncrement2 = () => {
    this.counter2 += 2;
  };

  handleIncrementFromRemote = (increment: number) => {
    this.counter2 += increment;
  };

  somethingConfigData = avaluosMf.somethingComponent;

  somethingComponentInputs: ISomethingComponentInput = {
    data: {
      message: 'Mensaje para mostar cuando el token sea valido',
      token: avaluosMf.token,
    },
  };

  somethingComponentInputs2: ISomethingComponentInput = {
    data: {
      message: 'hola mundo desde shell para el segundo componente',
      token: avaluosMf.token,
    },
  };

  somethingComponentEvents: IEventHandler<SomethingComponentEventsNames>[] = [
    {
      eventHandler: this.handleIncrement,
      eventName: 'onHandleClick',
    },
    {
      eventHandler: this.redirectToAvaluos,
      eventName: 'onHandleClick2',
    },
  ];

  somethingComponentEvents2: IEventHandler<SomethingComponentEventsNames>[] = [
    {
      eventHandler: this.handleIncrement2,
      eventName: 'onHandleClick',
    },
    {
      eventHandler: this.handleIncrementFromRemote,
      eventName: 'onHandleClick2',
    },
  ];

  avaluosCardConfig = avaluosMf.cardComponent;

  avaluosCardInputs = {
    data: {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episodes: 50,
    },
  };

  constructor(private router: Router) {}
}
