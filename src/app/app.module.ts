import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectComponent } from './project/project.component'; // PAS standalone
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component'; // ✅ standalone
import { AboutComponent } from './about/about.component'; // ✅ standalone
import { HeaderComponent } from './header/header.component'; // ✅ standalone
import { FooterComponent } from './footer/footer.component'; // ✅ standalone
import { ProjectTimerCardsComponent } from './project-timer-cards/project-timer-cards.component'; // ✅ standalone

@NgModule({
  declarations: [
    ProjectComponent // ✅ composant classique ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ProjectTimerCardsComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
