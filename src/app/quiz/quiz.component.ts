import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
questions = [
  {
    question: 'What is the largest planet in our Solar System?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
    selected: ''
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    answer: 'Canberra',
    selected: ''
  },
  {
    question: 'Who wrote the novel "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'Jane Austen', 'Charles Dickens'],
    answer: 'Harper Lee',
    selected: ''
  },
  {
    question: 'What is the process by which plants make their food?',
    options: ['Respiration', 'Photosynthesis', 'Digestion', 'Transpiration'],
    answer: 'Photosynthesis',
    selected: ''
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yen', 'Dollar', 'Euro', 'Won'],
    answer: 'Yen',
    selected: ''
  },
  {
    question: 'In which year did World War II end?',
    options: ['1942', '1945', '1948', '1950'],
    answer: '1945',
    selected: ''
  }
];


  score = 0;
  submitted = false;

  submitQuiz() {
    this.score = 0;
    this.questions.forEach(q => {
      if (q.selected === q.answer) {
        this.score++;
      }
    });
    this.submitted = true;
  }

  resetQuiz() {
  this.questions.forEach(q => q.selected = '');
  this.score = 0;
  this.submitted = false;
}

}

