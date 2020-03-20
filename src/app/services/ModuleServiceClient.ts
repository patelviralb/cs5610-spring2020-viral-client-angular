import { Constants } from './../common/Constants';
import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceClient {
    constructor(private apiUrl: Constants) {

    }

    findModulesForCourse = (courseId) =>
        fetch(`${this.apiUrl.COURSE_API_URL}/${courseId}/modules`).then(response => response.json());

    findLessonsForModule = (moduleId) =>
        fetch(`${this.apiUrl.MODULE_API_URL}/${moduleId}/lessons`).then(response => response.json());
}