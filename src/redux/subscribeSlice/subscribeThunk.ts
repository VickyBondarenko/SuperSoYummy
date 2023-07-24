import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axios from "axios";

export const fetchSubscribe = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("subscribe/fetchSubscribe", async (email, { rejectWithValue }) => {
  try {
    const response = await axios.post<string>("/api/subscribe", { email });
    console.log("response", response);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ERR_NETWORK") {
        rejectWithValue(`${error.message}`);
        return Notify.failure(`${error.message}`);
      }
      rejectWithValue(`${error.response?.data?.message}`);
      return Notify.failure(`${error.response?.data?.message}`);
    } else {
      rejectWithValue(`${error}`);
      return Notify.failure("Something went wrong");
    }
  }
});

export const fetchUnSubscribe = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("subscribe/fetchUnSubscribe", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`/api/subscribe/${id}`);
    return Notify.warning("You are unsububscribed");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ERR_NETWORK") {
        rejectWithValue(`${error.message}`);
        return Notify.failure(`${error.message}`);
      }
      rejectWithValue(`${error.response?.data?.message}`);
      return Notify.failure(`${error.response?.data?.message}`);
    } else {
      rejectWithValue(`${error}`);
      return Notify.failure("Something went wrong");
    }
  }
});
