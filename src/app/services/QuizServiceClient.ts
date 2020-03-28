import { Injectable } from '@angular/core';
import { Constants } from '../common/Constants';

@Injectable()
export class QuizServiceClient {
  constructor(private apiUrl: Constants) {

  }

  findAllQuizzes = () =>
    fetch(`${this.apiUrl.QUIZ_API_URL}`).then(response => response.json());
}
