import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../..";
import { TestFromServer } from "../../types/game-types";
import { OperationCategory } from "../../const/admin-const";
import { toastErrorMessage } from "../../utils/error-utils";

export const fetchSetTestsForSinglePlayer = createAsyncThunk<TestFromServer[], OperationCategory>(
  'single-player-game/fetchSetTests',
  async (category) => {
    try {
      console.log({category})
      const {data} = await api.get<TestFromServer[]>('/game/single-player-game', {params: {category}});
      console.log({data})
      return data
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return []
    }
  }
)
interface CheckAnswerForSinglePlayer {
  answerId: string|number;
  testId: string
}
export const checkSinglePlayerAnswer = createAsyncThunk<boolean, CheckAnswerForSinglePlayer>(
  'single-player-game/checkAnswer',
  async (params) => {
    try {
      const {data} = await api.get<boolean>('/game/check-answer', {params});
      console.log({data})
      return data
    } catch (err) {
      console.error({err})
      toastErrorMessage(err);
      return false
    }
  }
)

