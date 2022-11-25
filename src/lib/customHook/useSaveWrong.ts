import { useEffect } from "react";
import { QuizContentState } from "../../store/quizList/reducer";
import { decode } from "html-entities";

interface useSaveWrongProps {
  wrongNumbers: number[];
  quizList: QuizContentState[];
}

const useSaveWrong = ({ wrongNumbers, quizList }: useSaveWrongProps) => {
  useEffect(() => {
    const localStorageJsonData = localStorage.getItem("wrongQuiz");
    const localStorageParsedData =
      localStorageJsonData !== null ? JSON.parse(localStorageJsonData) : [];
    const newWrongAnswers = wrongNumbers
      .map((number) => ({ ...quizList[number], count: 1, date: new Date() }))
      .filter((quiz) => {
        let flag = true;
        localStorageParsedData.forEach(({ question }: any, index: number) => {
          if (decode(question) === quiz.question) {
            flag = false;
            localStorageParsedData[index].count += 1;
            localStorageParsedData[index].date = new Date();
          }
        });
        return flag;
      });

    localStorage.setItem(
      "wrongQuiz",
      JSON.stringify(localStorageParsedData.concat(newWrongAnswers))
    );
  }, []);
};

export default useSaveWrong;
