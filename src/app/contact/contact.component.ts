import { Component, OnInit } from '@angular/core';
import { Globals } from 'app/global';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public globals: Globals, private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Transpass - Contact Us");
    this.meta.updateTag({ property: 'og:description', content: 'Our central office is the base for our administration and finance. It is located on İncili Pınar Mahallesi, Gazi Muhtar Paşa, Business Center (Kalyon) Flor 6 Offices 44/47 Şehitkamil / Gaziantep, and is easily accessible by public transport.' });
  }

  ngOnInit() {

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

  }

  ngOnDestroy(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
}

}
