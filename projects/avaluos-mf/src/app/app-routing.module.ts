import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./containers/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'avaluar',
    loadChildren: () =>
      import('./containers/avaluo/avaluo.module').then((m) => m.AvaluoModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./containers/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
