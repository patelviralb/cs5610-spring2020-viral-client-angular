import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from '../app/components/home/home.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:':layout/courses', component: CourseTableComponent},
  {path:':layout/courses/:courseId/modules', component: CourseViewerComponent},
  {path:':layout/courses/:courseId/modules/:moduleId', component: CourseViewerComponent},
  {path:':layout/courses/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
