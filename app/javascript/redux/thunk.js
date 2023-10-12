import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "/api/greetings/random_greeting";

const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  }
);

export default fetchGreeting;
