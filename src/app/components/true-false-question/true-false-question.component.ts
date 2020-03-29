import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question;
  selectedAnswer = '';
  gradeAnswer = false;

  grade = () => {
    this.gradeAnswer = true;
  };

  ngOnInit(): void {
  }

}
