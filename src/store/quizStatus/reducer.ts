import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type quizStatusState = { status: string };

const initialState: quizStatusState = { status: "Wait" };

const quizStatusSlice = createSlice({
  name: "quizStatus",
  initialState,
  reducers: {
    setWait(state) {
      state.status = "Wait";
    },

    setProgress(state) {
      state.status = "Progress";
    },

    setSuccess(state) {
      state.status = "Success";
    },

    setFail(state, action: PayloadAction<number>) {
      state.status = "Fail";
    },

    setEnd(state) {
      state.status = "End";
    },
  },
});

export const { setWait, setProgress, setSuccess, setFail, setEnd } =
  quizStatusSlice.actions;

export default quizStatusSlice.reducer;
