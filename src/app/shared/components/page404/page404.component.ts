import { Component, OnInit } from '@angular/core';
import {faExclamationTriangle, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  public faExlamationTriangle: IconDefinition = faExclamationTriangle;
  constructor() { }

  public ngOnInit(): void {
  }

}
