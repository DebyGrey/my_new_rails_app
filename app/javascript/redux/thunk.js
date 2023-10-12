import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "api/greetings/random_greeting";

const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export default fetchGreeting;
