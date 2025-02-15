import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuizServiceClient} from '../../services/QuizServiceClient';
import {QuizAttemptServiceClient} from '../../services/QuizAttemptServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor(private route: ActivatedRoute, private quizAttemptService: QuizAttemptServiceClient) {
  }

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
