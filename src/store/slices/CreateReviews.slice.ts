import { createSlice } from "@reduxjs/toolkit";

interface PayloadType {
  payload: { img: string; company: string; name: string; text: string };
}
[];

const initialState = [
  {
    img: "",
    company: "",
    name: "",
    text: "",
  },
];

export const createReviews = createSlice({
  name: "createReview",
  initialState,
  reducers: {
    addReview: (state, { payload }: PayloadType) => ({
      ...state,
      img: payload.img,
      company: payload.company,
      name: payload.name,
      text: payload.text,
    }),
  },
});

export const { addReview } = createReviews.actions;
export default createReviews.reducer;
