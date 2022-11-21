const makeClassName = (
  correct: boolean,
  clicked: boolean,
  status: string,
  correctClass: string,
  wrongClass: string,
  target: string
) => {
  if (status === target) {
    if (correct) return correctClass;
    if (!correct && clicked) return wrongClass;
  }
  return "";
};

export default makeClassName;
