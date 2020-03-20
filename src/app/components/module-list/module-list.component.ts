import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModuleServiceClient } from './../../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ModuleServiceClient) {

  }

  layout = '';
  courseId = '';
  moduleId = '';
  courseModules = [
    {
      "moduleName": "",
      "_createdAt": "",
      "_updatedAt": "",
      "_id": ""
    }
  ];
  showWarning = true;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;

      this.service.findModulesForCourse(this.courseId).then(modules => {
        this.courseModules = modules;
        if (modules.length > 0) {
          this.showWarning = false;
        } else {
          this.showWarning = true;
        }
      });
    });
  }
}