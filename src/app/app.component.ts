import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}

//Old Code

// import { Component } from '@angular/core';
// import { QuestionsService } from './questions.service';
// import { Quiz, Answers, Choice } from './quiz.model';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   answers: Answers;
//   quiz: Quiz;
//   currentQuestionIndex: number;
//   private showResults = false;

//   constructor(private questionsService: QuestionsService) {
//     this.questionsService.getJSON('math').subscribe((data) => {
//       this.quiz = new Quiz('math', data);
//       this.answers = new Answers();
//       this.currentQuestionIndex = 0;
//     });
//   }

//   updateChoice(choice: Choice) {
//     this.answers.values[this.currentQuestionIndex] = choice;
//   }

//   nextOrViewResults() {
//     if (this.currentQuestionIndex === this.quiz.questions.length - 1) {
//       this.showResults = true;
//       return;
//     }

//     this.currentQuestionIndex++;
//   }
// }
