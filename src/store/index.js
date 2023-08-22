import { configureStore, createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    fname: "",
    lname: "",
    email: "",
    companyName: "",
    employed: "no",
  },
  reducers: {
    updateFname(state, action) {
      state.fname = action.payload;
    },
    updateLname(state, action) {
      state.lname = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updateEmployed(state, action) {
      state.employed = action.payload;
    },
    updateCompanyName(state, action) {
      state.companyName = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

export const {
  updateFname,
  updateLname,
  updateEmployed,
  updateEmail,
  updateCompanyName,
} = formSlice.actions;

export { store };
