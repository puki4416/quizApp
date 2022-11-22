import { useEffect } from "react";
import { QuizContentState } from "../../store/quizList/reducer";
import { decode } from "html-entities";

interface useSaveWrongProps {
  wrongNumbers: number[];
  quizList: QuizContentState[];
}

const useSaveWrong = ({ wrongNumbers, quizList }: useSaveWrongProps) => {
  useEffect(() => {
    const output = localStorage.getItem("wrongQuiz");
    const arr = output !== null ? JSON.parse(output) : [];
    const newWrongAnswers = wrongNumbers
      .map((number) => ({ ...quizList[number], count: 1 }))
      .filter((quiz) => {
        let flag = true;
        arr.forEach(({ question }: any, index: number) => {
          if (decode(question) === quiz.question) {
            flag = false;
            arr[index].count += 1;
          }
        });
        return flag;
      });

    localStorage.setItem(
      "wrongQuiz",
      JSON.stringify(arr.concat(newWrongAnswers))
    );
  }, []);
};

export default useSaveWrong;
