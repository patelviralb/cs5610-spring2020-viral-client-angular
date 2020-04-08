import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../../services/QuizServiceClient';
import {QuizAttemptServiceClient} from '../../services/QuizAttemptServiceClient';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: QuizServiceClient, private quizAttemptService: QuizAttemptServiceClient) {
  }

  layout = '';
  courseId = '';
  quizzes = [];
  attempts = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.courseId;
      this.service.findAllQuizzes().then(allQuizzes => {
        this.quizzes = allQuizzes;

        this.quizzes.forEach(eachQuiz => {
          this.quizAttemptService.getAttempt(eachQuiz._id).then(attempt => {
            if (attempt.length !== 0) {
              this.attempts.push(attempt);
            }
          });
        });
      });
    });
  }
}
