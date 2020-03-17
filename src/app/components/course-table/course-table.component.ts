import { Component, OnInit } from '@angular/core';

import { CourseServiceClient } from '../../services/CourseServiceClient'

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private service: CourseServiceClient) {

  }

  courses = [];

  sortCourses = (itemOne, itemTwo) => {
    return itemOne - itemTwo;
  }

  ngOnInit(): void {
    this.service.findAllCourses().then(allCourses => this.courses = allCourses);
  }
}