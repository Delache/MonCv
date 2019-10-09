import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {
  scroll = 0;

  experience = [
  {   title: 'Sapeur-pompier professionnel',
      society: 'Sdis33',
      date: 'septembre 2008 à septembre 2019',
      // tslint:disable-next-line: max-line-length
      description: 'Sous-officier, chef d\'agrés (Médoc, Ornano) -- Chef opérateur de traitement de l\'alerte et de coordination opérationnelle -- Formateur, instructeur'},

    {	title: 'Caviste - Responsable chai à barriques',
      society: 'Ginestet',
      date: 'février 2003 à septembre 2008',
      description : 'Négoce en vin à Carignan-de-Bordeaux'},

  {		title: 'Engagement sapeur-pompier volontaire',
      society: 'Sdis33',
      date: 'mai 2006 à septembre 2008',
      description: 'Equipier secouriste, incendie, et feu de fôret (Salaunes)'},

  {   title : 'Chef de rang / Chef de salle',
      society: 'Groupe accord, établissement St-James',
      date: 'février 2002 à février 2003',
      description: 'Service en salle, bar, sommellerie, gestion du personnel'},

  {   title: 'Menuisier aluminium',
      society: 'Eural SA',
      date: 'février 2001 à février 2002',
      description: 'Fabrication, vente et pose de menuiseries aluminium'},

  {		title: 'Electricien',
      society: 'Triangle',
      date: 'juillet 2000 à septembre 2001',
      description: 'Electricité domestique, navale et cablage industriel'} ];

  constructor() { }

  ngOnInit() {
  }
  next() {
    if (this.scroll <  this.experience.length) {
      this.scroll += 1;
      console.log(this.scroll);
    }
  }
  previous() {
    if (this.scroll > 0) {
      this.scroll -= 1;
      console.log(this.scroll);
    }
  }
}
