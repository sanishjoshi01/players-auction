import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/loginSlice";
import { changeEmail, changePassword, logoutReset } from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export { store };
export { changeEmail, changePassword, logoutReset };
