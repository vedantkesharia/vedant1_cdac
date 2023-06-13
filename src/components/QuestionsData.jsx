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
    // Add more questions...
  ];
  
  export default QuestionsData;