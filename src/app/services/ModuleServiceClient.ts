import { Injectable } from '@angular/core';

@Injectable()
export class ModuleServiceClient {
    findModulesForCourse = (courseId) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/001374158/courses/${courseId}/modules`).then(response => response.json());

    findLessonsForModule = (moduleId) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/001374158/modules/${moduleId}/lessons`).then(response => response.json());
}