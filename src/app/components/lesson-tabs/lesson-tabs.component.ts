import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleServiceClient } from 'src/app/services/ModuleServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ModuleServiceClient) {

  }

  layout = '';
  courseId = '';
  moduleId = '';
  lessonId = '';
  moduleLessons = [
    {
      "lessonName": "",
      "_createdAt": "",
      "_updatedAt": "",
      "_id": ""
    }
  ];
  showNoLessonWarning = false;
  showNoModuleSelectionWarning = true;
   

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;

      this.service.findLessonsForModule(this.moduleId).then(lessons => {
        this.moduleLessons = lessons;
        
        if (this.moduleId !== undefined) {
          this.showNoModuleSelectionWarning = false;
          this.showNoLessonWarning = true;
        }

        if (lessons.length > 0) {
          this.showNoLessonWarning = false;
        }
      });
    });
  }
}
