import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user : {
        email : "",
        firstName : "",
        lastName : "",
        _id : "",
    },
  };

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser : (state, action) => {
            console.log(action.payload.data);
            state._id = action.payload.data._id;
            state.firstName = action.payload.data.firstName;
            state.lastName = action.payload.data.lastName;
            state.email = action.payload.data.email;
        },

        logoutUser : (state, action) => {
            console.log(action.payload.data);
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
        }
    }
  });


  export const { loginUser, logoutUser} = userSlice.actions;

  export default userSlice.reducer;