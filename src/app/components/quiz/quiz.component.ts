import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../../services/QuestionServiceClient';
import {QuizServiceClient} from '../../services/QuizServiceClient';
import {QuizAttemptServiceClient} from '../../services/QuizAttemptServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private questionService: QuestionServiceClient,
              private quizService: QuizServiceClient,
              private quizAttemptService: QuizAttemptServiceClient) {
  }

  layout = '';
  courseId = '';
  quizId = '';
  quizTitle = '';
  questions = [];
  quizAttempt = [];
  score = '';

  submitQuiz = () => {
    this.quizAttemptService.submitAttempt(this.quizId, this.questions)
      .then(result => {
        this.quizAttempt = result;
        location.reload();
      });
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.courseId;
      this.quizId = params.quizId;

      this.quizService.findQuizById(this.quizId).then(quiz => {
        this.quizTitle = quiz.title;
      });

      this.questionService.findAllQuestions(this.quizId).then(allQuestions => {
        this.questions = allQuestions;
      });

      this.quizAttemptService.getAttempt(this.quizId).then(attempt => {
        this.quizAttempt = attempt;
        if (this.quizAttempt.length !== 0) {
          this.score = this.quizAttempt[0].score;
        }
      });
    });
  }
}
