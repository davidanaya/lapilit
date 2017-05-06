import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-header',
  styleUrls: ['header.component.scss'],
  template: `
    <h1 class="logo">pili baile</h1>
    <nav class="navigation">
      <a routerLink="/projects">projects</a>
      <a routerLink="/about-me">about Me</a>
      <a href="https://es.linkedin.com/in/pilibaile">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://www.behance.net/pilibailea">
        <i class="fa fa-behance" aria-hidden="true"></i>
      </a>
    </nav>
  `
})

export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}