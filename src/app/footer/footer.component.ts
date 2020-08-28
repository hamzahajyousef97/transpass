import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  data : Date = new Date();

  date: {year: number, month: number};

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}