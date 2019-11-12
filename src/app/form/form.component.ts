import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input () isModalVisible: boolean;
  hide = true;
  constructor() { }

  ngOnInit() { }

  nothing() {}
}
