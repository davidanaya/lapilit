import { Component, OnInit } from '@angular/core';

import { ProjectsViewerService } from './projects-viewer.service';
import { Project } from './project.model';

@Component({
  selector: 'pb-projects-viewer',
  styleUrls: ['projects-viewer.component.scss'],
  template: `
    <div *ngFor="let project of projects">
      <img src="https://unsplash.it/600/400">
    </div>
  `,
  providers: [ ProjectsViewerService ]
})

export class ProjectsViewerComponent implements OnInit {
  
  projects: Project[];

  constructor(private pvService: ProjectsViewerService) {}

  ngOnInit() {
    this.projects = this.pvService.getProjects();
  }
}