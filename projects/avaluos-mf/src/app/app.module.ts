import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomethingComponent } from './components/something/something.component';
import { ValidateTokenDirective } from './directives/validate-token/validate-token.directive';
import { SomethingSecureComponent } from './components/something-secure/something-secure.component';
import { CardModule } from './components/card/card.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SomethingComponent,
    ValidateTokenDirective,
    SomethingSecureComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
