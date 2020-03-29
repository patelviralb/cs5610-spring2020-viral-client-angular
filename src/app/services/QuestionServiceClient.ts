import { Injectable } from '@angular/core';
import { Constants } from '../common/Constants';

@Injectable()
export class QuestionServiceClient {
  constructor(private apiUrl: Constants) {

  }

  findAllQuestions = (quizId) =>
    fetch(`${this.apiUrl.QUIZ_API_URL}/${quizId}/questions`).then(response => response.json());
}
