import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const getusersData = createAsyncThunk("getusersData", async (value) => {
  const response = await axios.get("http://localhost:8080/users");
    return response.data;
});

// export const postusersData = createAsyncThunk("postusersData", async (values) => {
//   await axios.post("http://localhost:8080/users", values);
// });

export const deleteusersData = createAsyncThunk("deleteusersData", async (id) => {
  await axios.delete(`http://localhost:8080/users/${id}`);
});

export const updateusersData = createAsyncThunk("updateusersData", async (obj) => {
  await axios.put(`http://localhost:8080/users/${obj.id}`, obj);
  console.log(obj);
  window.location="/login"
});

export const getusersDataSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  userData: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getusersData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getusersData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getusersData.rejected, (state, action) => {
      state.loading = false;
      state.error = "data not found";
    });
  },
});

export const { userData } = getusersDataSlice.actions;

export default getusersDataSlice.reducer;