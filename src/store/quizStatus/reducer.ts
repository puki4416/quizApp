import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  QUIZ_END,
  QUIZ_FAIL,
  QUIZ_PROGRESS,
  QUIZ_SUCCESS,
  QUIZ_WAIT,
} from "../../lib/constant/quizState";

export type quizStatusState = { status: string };

const initialState: quizStatusState = { status: QUIZ_WAIT };

const quizStatusSlice = createSlice({
  name: "quizStatus",
  initialState,
  reducers: {
    setWait(state) {
      state.status = QUIZ_WAIT;
    },

    setProgress(state) {
      state.status = QUIZ_PROGRESS;
    },

    setSuccess(state) {
      state.status = QUIZ_SUCCESS;
    },

    setFail(state, action: PayloadAction<number>) {
      state.status = QUIZ_FAIL;
    },

    setEnd(state) {
      state.status = QUIZ_END;
    },
  },
});

export const { setWait, setProgress, setSuccess, setFail, setEnd } =
  quizStatusSlice.actions;

export default quizStatusSlice.reducer;
