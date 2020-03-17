import { Injectable } from '@angular/core';

import { COURSE_API_URL } from '../common/constants'

@Injectable()
export class CourseServiceClient {
    findAllCourses = () =>
        fetch(`${COURSE_API_URL}`).then(response => response.json());

    findCourseById = (courseId) =>
        fetch(`${COURSE_API_URL}/${courseId}`).then(response => response.json());
}