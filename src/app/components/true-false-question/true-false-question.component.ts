import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {
    _id: '',
    title: '',
    type: '',
    choices: [],
    correct: '',
    question: ''
  };
  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () =>
    this.answerChange.emit(this.answer);

  ngOnInit(): void {
  }

}
