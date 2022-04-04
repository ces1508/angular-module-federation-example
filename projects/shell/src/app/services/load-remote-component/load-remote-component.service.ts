import {
  loadRemoteModule,
  LoadRemoteModuleOptions,
} from '@angular-architects/module-federation';
import { Component, Injectable, ViewContainerRef } from '@angular/core';
import {
  IRemoteComponent,
  IRemoteComponentReturn,
} from '../../models/remoteComponent.model';

@Injectable({
  providedIn: 'root',
})
export class LoadRemoteComponentService {
  constructor() {}

  public async loadComponent<tp, tev>(
    container: ViewContainerRef,
    componentData: IRemoteComponent<tp, tev>
  ): Promise<IRemoteComponentReturn> {
    if (componentData.type !== 'component')
      throw new Error('El tipo debe ser componente');
    try {
      container.clear();
      const component = await loadRemoteModule({
        ...componentData,
        type: 'module',
      } as LoadRemoteModuleOptions);
      return this.renderComponent(component, container, componentData);
    } catch (e) {
      console.log(e.message);
      console.warn(
        `failed to create remote component --->"${componentData.componentName}"`
      );
      return null;
    }
  }

  private renderComponent(
    component: Component,
    container: ViewContainerRef,
    data: IRemoteComponent
  ): IRemoteComponentReturn {
    if (component && component[data.componentName]) {
      const ref = container.createComponent(component[data.componentName])
        .instance as any;

      const { props, events } = data.config;
      if (props) {
        for (let prop in props) {
          ref[prop] = data.config.props[prop];
        }
      }
      if (events && events.length > 0) {
        events.forEach((ev) => {
          ref[ev.eventName].subscribe(ev.eventHandler);
        });
      }
      return ref;
    }
    return null;
  }
}
