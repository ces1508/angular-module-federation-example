import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { Component } from '@angular/core';

export interface IEventHandler<tev> {
  eventName: tev;
  eventHandler: Function;
}

export type RemoteOptions = LoadRemoteModuleOptions & {
  displayName: string;
  componentName: string;
};

interface IRemoteComponentInternalData<tp, tev> {
  props?: tp;
  events?: IEventHandler<tev>[];
}

export interface RemoteComponent<tp, tev> {
  displayName: string;
  componentName: string;
  type: 'module' | 'string';
  exposedModule: string;
  remoteEntry: string;
  config?: IRemoteComponentInternalData<tp, tev>;
}

export interface RemoteComponentReturn {
  instance: Component;
}
