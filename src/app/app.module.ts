import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseTableComponent } from './components/course-table/course-table.component';
import {CourseServiceClient} from '../app/services/CourseServiceClient';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { ModuleServiceClient } from './services/ModuleServiceClient';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { Constants } from './common/Constants';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
