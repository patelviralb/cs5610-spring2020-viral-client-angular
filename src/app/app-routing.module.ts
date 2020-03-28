import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../app/components/home/home.component';
import {CourseTableComponent} from './components/course-table/course-table.component';
import {CourseViewerComponent} from './components/course-viewer/course-viewer.component';
import {QuizzesComponent} from './components/quizzes/quizzes.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':layout/courses', component: CourseTableComponent},
  {path: ':layout/courses/:courseId/modules', component: CourseViewerComponent},
  {path: ':layout/courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: ':layout/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent},
  {path: ':layout/courses/:courseId/quizzes', component: QuizzesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
