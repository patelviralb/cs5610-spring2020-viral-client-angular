import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
              private quizAttemptService: QuizAttemptServiceClient,
              private router: Router) {
  }

  layout = '';
  courseId = '';
  quizId = '';
  quizTitle = '';
  questions = [];

  submitQuiz = () => {
    this.quizAttemptService.submitAttempt(this.quizId, this.questions)
      .then(result => {
        this.router.navigate([`/${this.layout}/courses/${this.courseId}/quizzes`]);
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
    });
  }
}
