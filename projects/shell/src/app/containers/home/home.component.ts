import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import {
  IEventHandler,
  RemoteComponent,
} from '../../models/remoteComponent.model';
import {
  ISomethingComponentInput,
  SomethingComponentEventsNames,
} from '../../models/something-component.model';
import { LoadRemoteComponentService } from '../../services/load-remote-component/load-remote-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('loadMfComponent', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  title: string = 'Shell';
  constructor() {}

  counter = 1;
  counter2 = 2;

  handleIncrement = () => {
    this.counter++;
  };

  handleIncrement2 = () => {
    this.counter2 += 2;
  };

  handleIncrementFromRemote = (increment: number) => {
    this.counter2 += increment;
  };

  somethingConfigData = {
    componentName: 'SomethingComponent',
    displayName: 'somethingmf',
    exposedModule: './SomethingComponent',
    type: 'module',
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

  // async ngAfterViewInit() {
  //   const configRemoteComponent: RemoteComponent<
  //     ISomethingComponentInput,
  //     SomethingComponentEventsNames
  //   > = {
  //     componentName: 'SomethingComponent',
  //     displayName: 'somethingmf',
  //     exposedModule: './SomethingComponent',
  //     type: 'module',
  //     remoteEntry: 'http://localhost:4003/remoteEntry.js',
  //     config: {
  //       props: {
  //         data: 'hola mundo desde shell',
  //       },
  //       events: [
  //         {
  //           eventHandler: this.handleIncrement,
  //           eventName: 'onHandleClick',
  //         },
  //       ],
  //     },
  //   };
  //   await this.loadRemote.loadComponent<
  //     ISomethingComponentInput,
  //     SomethingComponentEventsNames
  //   >(this.container, configRemoteComponent);
  // }
}
