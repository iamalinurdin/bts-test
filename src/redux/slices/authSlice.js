import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token
    },
    logout(state) {
      state.token = null
    }
  }
})

export const { logout, login } = authSlice.actions
export default authSlice.reducer