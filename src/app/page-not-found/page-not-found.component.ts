import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/global';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
