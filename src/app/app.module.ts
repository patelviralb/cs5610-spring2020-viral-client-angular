import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseTableComponent } from './components/course-table/course-table.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { ModuleServiceClient } from './services/ModuleServiceClient';
import { LessonTabsComponent } from './components/lesson-tabs/lesson-tabs.component';
import { Constants } from './common/Constants';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import {QuizServiceClient} from './services/QuizServiceClient';
import { QuizComponent } from './components/quiz/quiz.component';
import {QuestionServiceClient} from './services/QuestionServiceClient';
import { TrueFalseQuestionComponent } from './components/true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './components/multiple-choice-question/multiple-choice-question.component';
import {FormsModule} from '@angular/forms';
import {QuizAttemptServiceClient} from './services/QuizAttemptServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    QuizServiceClient,
    QuestionServiceClient,
    QuizAttemptServiceClient,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
