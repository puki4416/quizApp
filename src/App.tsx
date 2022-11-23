import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Quiz from "./page/Quiz";
import Result from "./page/Result";
import ReviewNote from "./page/ReviewNote";
import PrivateRoute from "./privateRoute";
import { ReducerType } from "./store";
import "../src/imgs/spinner.gif";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const img: HTMLImageElement = new Image();
    img.src = "./spinner.gif";
  }, []);
  const result = useSelector((state: ReducerType) => state.quizResult);
  const quizList = useSelector((state: ReducerType) => state.quizList.content);
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route
        path={"/quiz"}
        element={
          <PrivateRoute component={<Quiz />} allow={quizList !== undefined} />
        }
      />
      <Route
        path={"/result"}
        element={
          <PrivateRoute
            component={<Result />}
            allow={result.correct + result.wrong === result.totalAmount}
          />
        }
      />
      <Route path={"/reviewnote"} element={<ReviewNote />} />
    </Routes>
  );
}

export default App;
