import { configureStore } from "@reduxjs/toolkit";
import { adsApi } from "../services/ads";

export const store = configureStore({
  reducer: {
    [adsApi.reducerPath]: adsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(adsApi.middleware);
  },
});
