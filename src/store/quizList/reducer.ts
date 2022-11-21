import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

export interface getQuizListPayload {
  amount: string;
  category: string;
  difficulty: string;
  navigate: NavigateFunction;
}

export interface QuizContentState {
  category: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  answers: string[];
}

export interface QuizState {
  content?: QuizContentState[];
  loading: boolean;
  error: boolean;
}

const initialState: QuizState = {
  loading: false,
  error: false,
};

const quizListSlice = createSlice({
  name: "quizList",
  initialState,

  reducers: {
    getQuizList(state, action: PayloadAction<getQuizListPayload>) {
      state.loading = true;
      state.error = false;
    },

    getQuizListSuccess(state, action: PayloadAction<QuizContentState[]>) {
      state.content = action.payload;
      state.loading = false;
    },

    getQuizListFailure(state) {
      state.error = true;
      state.loading = false;
    },

    initializeQuizList(state) {
      state.content = undefined;
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  getQuizList,
  getQuizListSuccess,
  getQuizListFailure,
  initializeQuizList,
} = quizListSlice.actions;

export default quizListSlice.reducer;
