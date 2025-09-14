export interface Review {
  id: string;
  name: string;
  class: string;
  rating: number;
  comment: string;
  subject?: string;
}

export const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Ritika Sharma',
    class: 'Class 12',
    subject: 'English',
    rating: 5,
    comment: 'Yogesh Sir completely transformed my English. From struggling with grammar to scoring 95% in boards. His teaching style is incredible!'
  },
  {
    id: '2',
    name: 'Aman Kumar Karn',
    class: 'Class 12',
    subject: 'Overall',
    rating: 5,
    comment: 'Delhi Topper with 97%! YKC faculty made every subject interesting. The study material and doubt sessions were game-changers.'
  },
  {
    id: '3',
    name: 'Shivam Goel',
    class: 'Class 11',
    subject: 'Commerce',
    rating: 5,
    comment: 'Scored 96.8% in Commerce stream. Jhankar Ma\'am and the team made business studies so practical and easy to understand.'
  },
  {
    id: '4',
    name: 'Priya Singh',
    class: 'Class 10',
    subject: 'Mathematics',
    rating: 5,
    comment: 'Akshay Sir made Math fun! His problem-solving techniques helped me score 98% in Math. Highly recommend YKC!'
  },
  {
    id: '5',
    name: 'Rohit Mehta',
    class: 'Class 12',
    subject: 'Science',
    rating: 5,
    comment: 'Best coaching in Delhi for Science stream. The faculty explains complex concepts so simply. Got 94% in Physics!'
  },
  {
    id: '6',
    name: 'Sneha Gupta',
    class: 'Class 11',
    subject: 'Psychology',
    rating: 5,
    comment: 'Jaskeerat Ma\'am is amazing! She makes Psychology so interesting and relatable. Can\'t wait for boards now!'
  }
];