import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor() { }

  courses = [
    {"id": 1, "title": "Course 01"},
    {"id": 2, "title": "Course 02"},
    {"id": 3, "title": "Course 03"},
    {"id": 4, "title": "Course 04"}
  ]

  ngOnInit(): void {
    
  }

}
