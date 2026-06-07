export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  isLoggedIn: boolean;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  reward: number;
}
