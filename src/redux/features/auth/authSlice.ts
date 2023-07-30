import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserState {
  user: {
    _id: string | null;
    id: string | null;
    userName: string | null;
    email: string | null;
    profileImage?: string | null;
    myBooks?: [];
    bookmark?: [];
    currentlyReading?: [];
    finishedReading?: [];
    planToRead?: [];
  };
}

const initialState: IUserState = {
  user: {
    id: null,
    _id: null,
    userName: null,
    email: null,
    profileImage: null,
    bookmark: [],
    currentlyReading: [],
    finishedReading: [],
    planToRead: [],
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
  },
});
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
