import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Title } from "@angular/platform-browser";
import * as Rellax from 'rellax';
import { Globals } from 'app/global';
import { SwiperOptions } from 'swiper';

import { Partner } from '../shared/partner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {

  images: string[];
  partner: Partner[];

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
  };

  model: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;

  constructor( 
    private renderer : Renderer,
    config: NgbAccordionConfig,
    public globals: Globals,
    private titleService: Title) {
      config.closeOthers = true;
      config.type = 'info';
      this.titleService.setTitle("Transpass - Home");
  }
  isWeekend(date: NgbDateStruct) {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
      return date.month !== current.month;
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('index-page');

      this.loadImages();
  }

  loadImages() {
    this.images = [
      'assets/img/new/2.jpeg',
      'assets/img/new/1.jpeg',
      'assets/img/new/5.jpeg',
      'assets/img/new/18.jpeg',
      'assets/img/new/20.jpeg',
      'assets/img/new/31.jpeg',
      'assets/img/new/33.jpeg',
      'assets/img/new/34.jpeg',
      'assets/img/new/35.jpeg',
      'assets/img/new/36.jpeg',
      'assets/img/new/37.jpeg',
      'assets/img/new/29.jpeg',
      'assets/img/new/6.jpeg',
      'assets/img/new/9.jpeg',
      'assets/img/new/13.jpeg',
      'assets/img/new/15.jpeg',
      'assets/img/new/16.jpeg',
      'assets/img/new/3.jpeg',
      'assets/img/new/seat1.jpeg',
      'assets/img/new/coockpit11.jpeg',
      'assets/img/new/coockpit2.jpeg',
      'assets/img/new/21.jpeg',
      'assets/img/new/27.jpeg',
    ];

    this.partner = [
      {
        image: 'assets/img/new/ghadames.jpeg',
        name: 'Ghadames Air'
      },
      {
        image: 'assets/img/new/concord.jpeg',
        name: 'Concord Aerotechnic'
      },
      {
        image: 'assets/img/new/ruh.jpeg',
        name: 'Ruh Aviation'
      },
      {
        image: 'assets/img/new/jonika.jpeg',
        name: 'Jonika Air Lines'
      },
      {
        image: 'assets/img/new/tac.jpeg',
        name: 'Trans Air Congo'
      },
      {
        image: 'assets/img/new/uia.jpeg',
        name: 'UIA'
      },
      {
        image: 'assets/img/new/yan.jpeg',
        name: 'YanAir Airlines'
      },
      {
        image: 'assets/img/new/toga.jpeg',
        name: 'TOGA MRO'
      },      
      {
        image: 'assets/img/new/aquiline.jpeg',
        name: 'Aquiline International'
      },
      {
        image: 'assets/img/new/baltic.jpeg',
        name: 'Air Baltic'
      },
    ];
  }

  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('index-page');
  }

  

}
