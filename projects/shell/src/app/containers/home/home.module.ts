import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { LoadRemoteModule } from '../../components/load-remote/load-remote.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModuleFederationToolsModule,
    LoadRemoteModule,
  ],
})
export class HomeModule {}
