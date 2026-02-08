import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createReviews } from "./slices/CreateReviews.slice";

const reducers = combineReducers({
  createReview: createReviews,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
