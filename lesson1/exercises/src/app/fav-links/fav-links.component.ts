import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://kc-lcw-jan-23-classroom.github.io/js-assignment-4-html-me-something-miserysauce/', 'https://neopets.com']
  constructor() { }

  ngOnInit() {
  }

}
