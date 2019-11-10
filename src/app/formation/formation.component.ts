import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})

export class FormationComponent implements OnInit {
  formations = [
  { title: 'Developpeur web',
    etablissement: 'Wild Code School',
    date: 'septembre 2019 à juin 2020',
    description: 'JavaScript -- Angular -- NodeJs -- HTML -- Python'},

  { title: 'Developpeur web',
    etablissement : 'Plateformes en ligne',
    date: 'depuis mai 2019',
    description: 'Openclassrooms -- Udemy -- CodeWars -- CodeAcademy -- FranceIoI'},

  { title: 'Bts informatique industrielle',
    etablissement: 'Cned',
    date: 'septembre 2000 à septembre 2001',
    description: 'première année'},

  { title: 'Baccalauréat STI',
    etablissement: 'Gustave Eiffel',
    date: 'juillet 2000',
    description: 'génie éléctrotechnique'} ];


  constructor() { }

  ngOnInit() {
  }

}
