import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseServiceClient } from './../../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CourseServiceClient) { }

  layout = "";
  courseId = "";
  courseDetails = {
    "courseTitle": "",
    "_id": ""
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.courseId;
      this.service.findCourseById(this.courseId).then(course => this.courseDetails = course);
    });
  }

}
