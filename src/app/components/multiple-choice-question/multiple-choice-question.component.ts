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

  quizId = '';
  quizAttempt = [];
  submittedAnswer = '';
  correctAnswer = '';

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

  findAnswers = () => {
    this.quizAttempt.forEach(eachAttempt => {
      eachAttempt.answers.forEach(eachQuestion => {
        if(eachQuestion._id === this.question._id) {
          this.submittedAnswer = eachQuestion.answer;
          this.correctAnswer = eachQuestion.correct;
        }
      });
    });
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;

      this.quizAttemptService.getAttempt(this.quizId).then(attempt =>
        this.quizAttempt = attempt
      ).then(status => this.findAnswers());
    });
  }

}
