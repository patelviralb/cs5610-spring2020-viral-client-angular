import { Injectable } from '@angular/core';

import { COURSE_API_URL } from '../common/constants'
import { MODULE_API_URL } from '../common/constants'

@Injectable()
export class ModuleServiceClient {
    findModulesForCourse = (courseId) =>
        fetch(`${COURSE_API_URL}/${courseId}/modules`).then(response => response.json());

    findLessonsForModule = (moduleId) =>
        fetch(`${MODULE_API_URL}/${moduleId}/lessons`).then(response => response.json());
}