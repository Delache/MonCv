import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';
import { DownloadComponent } from './download/download.component';
import { CompetenceComponent } from './competence/competence.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: 'experience', pathMatch: 'full' },
  {path: 'experience', component: ExperienceComponent},
  {path: 'competence', component: CompetenceComponent },
  {path: 'formation', component: FormationComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: '**' ,  component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
