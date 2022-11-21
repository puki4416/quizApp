import axios from "axios";

export const axiosGetQuizList = ({
  amount,
  category,
  difficulty,
}: {
  amount: string;
  category: string;
  difficulty: string;
}) => {
  return axios.get(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );
};
