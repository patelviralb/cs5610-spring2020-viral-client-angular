import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../../services/QuestionServiceClient';
import {QuizServiceClient} from '../../services/QuizServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private questionService: QuestionServiceClient, private quizService: QuizServiceClient) {
  }

  layout = '';
  courseId = '';
  quizId = '';
  quizTitle = '';
  questions = [];

  submitQuiz = () => {
    fetch(`https://vp-cs5610-sp2020a9-server-node.herokuapp.com/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => console.log(result));
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
