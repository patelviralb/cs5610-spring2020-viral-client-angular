import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CourseServiceClient } from '../../services/CourseServiceClient'

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CourseServiceClient) {

  }

  layout = '';
  courses = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.layout = params.layout;
      this.service.findAllCourses().then(allCourses => {
        this.courses = allCourses;
      });
    })
  }
}