import { Injectable } from '@angular/core';
import { Constants } from '../common/Constants';

@Injectable()
export class CourseServiceClient {
    constructor(private apiUrl: Constants) {

    }
    
    findAllCourses = () =>
        fetch(`${this.apiUrl.COURSE_API_URL}`).then(response => response.json());

    findCourseById = (courseId) =>
        fetch(`${this.apiUrl.COURSE_API_URL}/${courseId}`).then(response => response.json());
}