import { Component } from '@angular/core';

export interface IEventHandler<tev> {
  eventName: tev;
  eventHandler: Function;
}

interface IRemoteComponentInternalData<tp, tev> {
  props?: tp;
  events?: IEventHandler<tev>[];
}

export declare type IRemoteComponent<tp = any, tev = any> = {
  displayName: string;
  componentName: string;
  type: 'component';
  exposedModule: string;
  remoteEntry: string;
  config?: IRemoteComponentInternalData<tp, tev>;
};
export interface IRemoteComponentReturn {
  instance: Component;
}
