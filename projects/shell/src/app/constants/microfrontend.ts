import { environment } from '../../environments/environment';
import { IRemoteComponent } from '../models/remoteComponent.model';

const somethingComponent: IRemoteComponent = {
  componentName: 'SomethingComponent',
  displayName: 'app-something',
  exposedModule: './SomethingComponent',
  type: 'component',
  remoteEntry: environment.avaluosMf,
};

const cardComponent: IRemoteComponent = {
  componentName: 'CardComponent',
  displayName: 'av-card',
  exposedModule: './CardComponent',
  remoteEntry: environment.avaluosMf,
  type: 'component',
};

export const avaluosMf = {
  token: environment.avaluosMfToken,
  somethingComponent,
  cardComponent,
};
