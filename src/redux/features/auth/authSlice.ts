import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// interface IUser
interface IUserState {
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
}

const initialState: IUserState = {
  id: null,
  _id: null,
  userName: null,
  email: null,
  profileImage: null,
  bookmark: [],
  currentlyReading: [],
  finishedReading: [],
  planToRead: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state._id = action.payload?._id;
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.profileImage = action.payload.profileImage;
      state.myBooks = action.payload.myBooks;
      state.bookmark = action.payload.bookmark;
    },
  },
});
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
