const QuestionsData = [
  {

    id: 1,
    text: 'Determine the probability that a digit chosen at random from the digits 1, 2, 3, …12 will be odd?',
    options: [
    { id: 1, text: '1/2' },
    { id: 2, text: '1/9' },
    { id: 3, text: '5/9' },
    { id: 4, text: '4/9' },
    ],
    correctAnswerId: 1,
    explanation: 'Total no. of Digits = 12. Equally likely cases = 12. There are six odd digits. Probability = 6 / 12 = 1 / 2',
  },

{

id: 2,
text: 'A bag contains 8 red, 4 green, and 5 blue marbles. What is the probability of randomly selecting a green marble?',
options: [
{ id: 1, text: '1/3' },
{ id: 2, text: '1/4' },
{ id: 3, text: '1/5' },
{ id: 4, text: '2/3' },
],
correctAnswerId: 1,
explanation: 'Total marbles = 8 + 4 + 5 = 17. Probability of selecting a green marble = 4 / 17 ≈ 1/4',
},

{

id: 3,
text: 'What is the probability of rolling an even number on a fair six-sided die?',
options: [
{ id: 1, text: '1/3' },
{ id: 2, text: '1/4' },
{ id: 3, text: '1/2' },
{ id: 4, text: '2/3' },
],
correctAnswerId: 3,
explanation: 'There are three even numbers (2, 4, 6) and six possible outcomes on a fair six-sided die. Probability = 3 / 6 = 1 / 2',
},

{

id: 4,
text: 'A box contains 15 chocolates, 5 of which are dark chocolate. If you randomly pick one chocolate, what is the probability of selecting a dark chocolate?',
options: [
{ id: 1, text: '1/3' },
{ id: 2, text: '1/4' },
{ id: 3, text: '1/5' },
{ id: 4, text: '1/15' },
],
correctAnswerId: 1,
explanation: 'Total chocolates = 15. Probability of selecting a dark chocolate = 5 / 15 = 1/3',
},

{

id: 5,
text: 'A deck of cards contains 52 cards. What is the probability of drawing a heart or a spade from a standard deck of cards?',
options: [
{ id: 1, text: '1/4' },
{ id: 2, text: '1/2' },
{ id: 3, text: '3/4' },
{ id: 4, text: '2/3' },
],
correctAnswerId: 3,
explanation: 'There are 13 hearts + 13 spades = 26 favorable outcomes. Probability = 26 / 52 = 1/2',
},

{

id: 6,
text: 'A box contains 10 red balls and 8 blue balls. If you randomly pick one ball, what is the probability of selecting a blue ball?',
options: [
{ id: 1, text: '4/9' },
{ id: 2, text: '1/2' },
{ id: 3, text: '2/5' },
{ id: 4, text: '3/4' },
],
correctAnswerId: 3,
explanation: 'Total balls = 10 + 8 = 18. Probability of selecting a blue ball = 8 / 18 = 4/9',
},

{

id: 7,
text: 'In a game, you roll two fair six-sided dice. What is the probability of getting a sum of 7?',
options: [
{ id: 1, text: '1/6' },
{ id: 2, text: '1/9' },
{ id: 3, text: '1/12' },
{ id: 4, text: '1/36' },
],
correctAnswerId: 4,
explanation: 'There are six ways to get a sum of 7 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 possible outcomes. Probability = 6 / 36 = 1/6',
},

{

id: 8,
text: 'A bag contains 5 red balls, 3 green balls, and 2 blue balls. If you randomly pick two balls, what is the probability of selecting one red and one blue ball?',
options: [
{ id: 1, text: '1/5' },
{ id: 2, text: '1/6' },
{ id: 3, text: '1/10' },
{ id: 4, text: '1/15' },
],
correctAnswerId: 3,
explanation: 'Total balls = 5 + 3 + 2 = 10. Probability of selecting one red and one blue ball = (5/10) * (2/9) = 1/10',
},

{

id: 9,
text: 'A jar contains 30 candies - 12 are chocolate and 18 are fruit-flavored. What is the probability of randomly picking a chocolate candy?',
options: [
{ id: 1, text: '2/5' },
{ id: 2, text: '3/10' },
{ id: 3, text: '2/3' },
{ id: 4, text: '3/5' },
],
correctAnswerId: 1,
explanation: 'Total candies = 12 + 18 = 30. Probability of selecting a chocolate candy = 12 / 30 = 2/5',
},

{

id: 10,
text: 'A spinner is divided into 8 equal sections numbered from 1 to 8. What is the probability of landing on an even number?',
options: [
{ id: 1, text: '1/8' },
{ id: 2, text: '1/2' },
{ id: 3, text: '1/4' },
{ id: 4, text: '3/8' },
],
correctAnswerId: 2,
explanation: 'There are four even numbers (2, 4, 6, 8) out of eight possible outcomes. Probability = 4 / 8 = 1/2',
},
{
id: 11,
text: 'A dice is thrown, what is the probability that the number obtained is a prime number?',
options: [
  { id: 1, text: '1/6' },
  { id: 2, text: '1/8' },
  { id: 3, text: '1/2' },
  { id: 4, text: '1/3' },
],
correctAnswerId: 3,
explanation: 'Dice is thrown, the total possible outcomes = 6. Favorable outcomes = 3 i.e. (2,3,5). Probability = 3 / 6 = 1 / 2',
},
{

  id: 12,
  text: 'A bag contains 4 red balls, 3 blue balls, and 5 green balls. If you randomly pick one ball, what is the probability of selecting a blue ball?',
  options: [
  { id: 1, text: '3/12' },
  { id: 2, text: '1/3' },
  { id: 3, text: '3/5' },
  { id: 4, text: '1/4' },
  ],
  correctAnswerId: 1,
  explanation: 'Total balls = 4 + 3 + 5 = 12. Probability of selecting a blue ball = 3 / 12 = 1/4',
  
},
{

  id: 13,
  text: 'A box contains 7 black socks, 5 white socks, and 4 blue socks. If you randomly pick two socks, what is the probability of selecting two black socks?',
  options: [
  { id: 1, text: '1/8' },
  { id: 2, text: '7/16' },
  { id: 3, text: '1/12' },
  { id: 4, text: '7/16' },
  ],
  correctAnswerId: 4,
  explanation: 'Total socks = 7 + 5 + 4 = 16. Probability of selecting a black sock first = 7 / 16. Probability of selecting a black sock second (without replacement) = 6 / 15. Probability of both events happening together = (7 / 16) * (6 / 15) = 7/16',
  
},
{

  id: 14,
  text: 'In a bag, there are 5 red balls and 8 green balls. If you pick one ball at random and then put it back in the bag, what is the probability of picking a red ball twice in a row?',
  options: [
  { id: 1, text: '1/10' },
  { id: 2, text: '1/13' },
  { id: 3, text: '25/104' },
  { id: 4, text: '25/64' },
  ],
  correctAnswerId: 4,
  explanation: 'Total balls = 5 + 8 = 13. Probability of picking a red ball twice = (5 / 13) * (5 / 13) = 25/169',
  
},
{

  id: 15,
  text: 'A standard deck of cards contains 52 cards. What is the probability of drawing a face card (jack, queen, or king) from the deck?',
  options: [
  { id: 1, text: '4/13' },
  { id: 2, text: '3/13' },
  { id: 3, text: '12/52' },
  { id: 4, text: '3/4' },
  ],
  correctAnswerId: 2,
  explanation: 'There are 12 face cards (4 jacks + 4 queens + 4 kings) in a deck of 52 cards. Probability = 12 / 52 = 3/13',
  
},
{

  id: 16,
  text: 'In a bag, there are 10 red marbles and 5 blue marbles. If you randomly pick one marble and then another marble without replacing the first one, what is the probability of picking a red marble first and then a blue marble?',
  options: [
  { id: 1, text: '1/3' },
  { id: 2, text: '1/2' },
  { id: 3, text: '1/5' },
  { id: 4, text: '1/6' },
  ],
  correctAnswerId: 4,
  explanation: 'Total marbles = 10 + 5 = 15. Probability of picking a red marble first = 10 / 15. Probability of picking a blue marble second (without replacement) = 5 / 14. Probability of both events happening together = (10 / 15) * (5 / 14) = 1/6',
  
},
{

  id: 17,
  text: 'A jar contains 20 candies - 8 are chocolate and 12 are fruit-flavored. What is the probability of randomly picking a fruit-flavored candy?',
  options: [
  { id: 1, text: '8/20' },
  { id: 2, text: '3/5' },
  { id: 3, text: '12/20' },
  { id: 4, text: '2/3' },
  ],
  correctAnswerId: 4,
  explanation: 'Total candies = 8 + 12 = 20. Probability of selecting a fruit-flavored candy = 12 / 20 = 3/5',
  
},
{

  id: 18,
  text: 'A box contains 10 blue balls and 7 red balls. If you randomly pick one ball, what is the probability of selecting a red ball?',
  options: [
  { id: 1, text: '7/10' },
  { id: 2, text: '7/17' },
  { id: 3, text: '10/17' },
  { id: 4, text: '3/7' },
  ],
  correctAnswerId: 2,
  explanation: 'Total balls = 10 + 7 = 17. Probability of selecting a red ball = 7 / 17',
  
},
{

  id: 19,
  text: 'A jar contains 25 jelly beans - 10 are green, 8 are red, and 7 are yellow. What is the probability of randomly picking a yellow jelly bean?',
  options: [
  { id: 1, text: '8/25' },
  { id: 2, text: '7/25' },
  { id: 3, text: '2/5' },
  { id: 4, text: '1/3' },
  ],
  correctAnswerId: 3,
  explanation: 'Total jelly beans = 10 + 8 + 7 = 25. Probability of selecting a yellow jelly bean = 7 / 25 = 2/5',
  
},
{

  id: 20,
  text: 'A box contains 12 identical pens, out of which 3 are defective. What is the probability of randomly selecting a non-defective pen?',
  options: [
  { id: 1, text: '1/4' },
  { id: 2, text: '1/3' },
  { id: 3, text: '3/4' },
  { id: 4, text: '2/3' },
  ],
  correctAnswerId: 4,
  explanation: 'Total pens = 12. Probability of selecting a non-defective pen = (12 - 3) / 12 = 9/12 = 3/4',
},
];

export default QuestionsData;