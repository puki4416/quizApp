export const makeAnswers = (
  correctAnswer: string,
  incorrect_answers: string[]
) => {
  const answers = [...incorrect_answers];
  answers.splice(Math.floor(Math.random() * 4), 0, correctAnswer);
  return answers;
};
