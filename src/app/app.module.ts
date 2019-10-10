import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ContactComponent } from './contact/contact.component';
import { CompetenceComponent } from './competence/competence.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DownloadComponent,
    FooterComponent,
    ExperienceComponent,
    FormationComponent,
    ContactComponent,
    CompetenceComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
