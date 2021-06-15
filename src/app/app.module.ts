import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

registerLocaleData(localeFR);

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'fr', }, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
