import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface quizResultState {
  startTime?: Date;
  totalAmount?: number;
  correct: number;
  wrong: number;
  wrongNumbers: number[];
}

const initialState: quizResultState = {
  correct: 0,
  wrong: 0,
  wrongNumbers: [],
};

const quizResultSlice = createSlice({
  name: "quizResult",
  initialState,

  reducers: {
    startQuiz(
      state,
      action: PayloadAction<{
        startTime: Date;
        totalAmount: number;
      }>
    ) {
      state.startTime = action.payload.startTime;
      state.totalAmount = action.payload.totalAmount;
    },

    correctQuiz(state) {
      state.correct += 1;
    },

    wrongQuiz(state, action: PayloadAction<number>) {
      state.wrong += 1;
      state.wrongNumbers.push(action.payload);
    },

    initializeQuiz(state) {
      state.correct = 0;
      state.wrong = 0;
      state.wrongNumbers = [];
      state.startTime = undefined;
      state.totalAmount = undefined;
    },
  },
});

export const { startQuiz, correctQuiz, wrongQuiz, initializeQuiz } =
  quizResultSlice.actions;

export default quizResultSlice.reducer;
