import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../../services/QuizServiceClient';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: QuizServiceClient) {
  }

  layout = '';
  courseId = '';
  quizzes = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.layout = params.layout;
      this.courseId = params.courseId;
      this.service.findAllQuizzes().then(allQuizzes => {
        this.quizzes = allQuizzes;
      });
    });
  }
}
