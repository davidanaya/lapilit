import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsViewerComponent } from './containers/projects-viewer/projects-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsViewerComponent },
  { path: 'about-me', component: AboutMeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProjectsViewerComponent,
  ]
})
export class AppModule {}