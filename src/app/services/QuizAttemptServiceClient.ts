import {Injectable} from '@angular/core';
import {Constants} from '../common/Constants';

@Injectable()
export class QuizAttemptServiceClient {
  constructor(private apiUrl: Constants) {

  }

  submitAttempt = (quizId, attemptedQuestions) =>
    fetch(`${this.apiUrl.QUIZ_API_URL}/${quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(attemptedQuestions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

  getAttempt = (quizId) =>
    fetch(`${this.apiUrl.QUIZ_API_URL}/${quizId}/attempts`).then(response => response.json());
}
