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

  somethingConfigData: IRemoteComponent = {
    componentName: 'SomethingComponent',
    displayName: 'app-something',
    exposedModule: './SomethingComponent',
    type: 'component',
    remoteEntry: 'http://localhost:4003/remoteEntry.js',
  };

  somethingComponentInputs: ISomethingComponentInput = {
    data: 'hola mundo desde shell',
  };

  somethingComponentInputs2: ISomethingComponentInput = {
    data: 'hola mundo desde shell para el segundo componente',
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

  avaluosCardConfig: IRemoteComponent = {
    componentName: 'CardComponent',
    displayName: 'av-card',
    exposedModule: './CardComponent',
    remoteEntry: 'http://localhost:4003/remoteEntry.js',
    type: 'component',
  };

  constructor(private router: Router) {}
}
