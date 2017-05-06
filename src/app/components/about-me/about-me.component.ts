import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-about-me',
  styleUrls: ['about-me.component.scss'],
  template: `
    <img class="picture" src="https://img.buzzfeed.com/buzzfeed-static/static/2014-10/24/13/enhanced/webdr10/longform-original-1462-1414172676-20.jpg?crop=362:362;376,3&downsize=715:*&output-format=auto&output-quality=auto" alt="pili baile picture">
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at arcu eleifend, egestas nulla ut, ullamcorper est. Aliquam neque velit, elementum sit amet sodales sit amet, pharetra at ipsum. Phasellus vitae lorem nec ligula maximus tempus. Ut non mi id tellus blandit interdum ac quis risus. Proin quis nibh vitae nisi iaculis auctor. Duis lobortis faucibus fringilla. In at tortor placerat felis vulputate eleifend non nec ex.</p>
  `
})

export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}