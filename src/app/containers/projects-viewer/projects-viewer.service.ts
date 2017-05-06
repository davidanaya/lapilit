import { Injectable } from '@angular/core';

import { Project } from './project.model';
import { ProjectsMock } from './projects.mock';

@Injectable()
export class ProjectsViewerService {

  constructor() {}

  getProjects(): Project[] {
    return ProjectsMock;
  }
}