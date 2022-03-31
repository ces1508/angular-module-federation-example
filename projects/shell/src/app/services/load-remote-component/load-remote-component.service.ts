import {
  loadRemoteModule,
  LoadRemoteModuleOptions,
} from '@angular-architects/module-federation';
import { Injectable, ViewContainerRef } from '@angular/core';
import {
  RemoteComponent,
  RemoteComponentReturn,
} from '../../models/remoteComponent.model';

@Injectable({
  providedIn: 'root',
})
export class LoadRemoteComponentService {
  constructor() {}

  public async loadComponent<tp, tev>(
    container: ViewContainerRef,
    componentData: RemoteComponent<tp, tev>
  ): Promise<RemoteComponentReturn> {
    try {
      container.clear();
      const component = await loadRemoteModule({
        ...componentData,
      } as LoadRemoteModuleOptions);

      if (component && component[componentData.componentName]) {
        const ref = container.createComponent(
          component[componentData.componentName]
        ).instance as any;

        const { props, events } = componentData.config;
        if (props) {
          for (let prop in props) {
            ref[prop] = componentData.config.props[prop];
          }
        }
        if (events && events.length > 0) {
          events.forEach((ev) => {
            ref[ev.eventName].subscribe(ev.eventHandler);
          });
        }

        return ref;
      }
    } catch (e) {
      console.warn(
        `failed to create remote component "${componentData.componentName}"`
      );
      return null;
    }
  }
}
