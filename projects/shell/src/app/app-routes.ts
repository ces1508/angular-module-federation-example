import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./containers/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'avaluos',
    loadChildren: () =>
      loadRemoteModule({
        exposedModule: './AvaluoModule',
        remoteEntry: 'http://localhost:4003/remoteEntry.js',
        type: 'module',
      }).then((m) => m.AvaluoModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      loadRemoteModule({
        exposedModule: './CharactersModule',
        remoteEntry: 'http://localhost:4003/remoteEntry.js',
        type: 'module',
      }).then((m) => m.CharactersModule),
  },
];

export default routes;
