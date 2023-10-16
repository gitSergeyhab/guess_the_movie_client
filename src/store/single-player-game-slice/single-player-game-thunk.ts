import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../..";
import { SinglePlayerGame, SinglePlayerGameCheckAnswerData, SinglePlayerGameStartData, TestFromServer } from "../../types/game-types";
import { OperationCategory } from "../../const/admin-const";
import { toastErrorMessage } from "../../utils/error-utils";
import { setPreUpdateGame,  setRightAnswer,  setTests, updateState, updateStateFromNext } from "./single-player-game-slice";


export const fetchStartGameData = createAsyncThunk<SinglePlayerGameStartData|null, OperationCategory>(
  'single-player-game/fetchStartGameData',
  async (category, {dispatch}) => {
    try {
      console.log({category})
      const {data} = await api.post<SinglePlayerGameStartData>('/game/single/start', {category});
      const {game, tests} = data;
      dispatch(setTests(tests));
      dispatch(updateState(game));
      console.log({data})
      return data
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return null
    }
  }
)
interface CheckAnswerForSinglePlayer {
  answerId: string|number;
  testId: string;
  gameId: string|null;
}
export const checkSinglePlayerAnswer = createAsyncThunk<SinglePlayerGameCheckAnswerData|null, CheckAnswerForSinglePlayer>(
  'single-player-game/checkAnswer',
  async (body, {dispatch}) => {
    try {
      const {data} = await api.post<SinglePlayerGameCheckAnswerData>('/game/single/check-answer', body);
      const {game, rightAnswer} = data;
      dispatch(setRightAnswer(rightAnswer));
      console.log({game})
      dispatch(setPreUpdateGame(game));
      console.log({data})
      return data
    } catch (err) {
      console.error({err})
      toastErrorMessage(err);
      return null
    }
  }
)

export const skipSinglePlayerTest = createAsyncThunk<SinglePlayerGame|null, string>(
  'single-player-game/skipSinglePlayerTest',
  async (gameId, {dispatch}) => {
    try {
      const {data} = await api.post<SinglePlayerGame>('/game/single/skip-test', {gameId});
      dispatch(updateState(data));
      console.log({data})
      return data
    } catch (err) {
      console.error({err})
      toastErrorMessage(err);
      return null
    }
  }
)

export const startNewLvl = createAsyncThunk<TestFromServer[], OperationCategory>(
  'single-player-game/startNewLvl',
  async (category, {dispatch}) => {
    try {
      console.log({category})

      const {data} = await api.post<TestFromServer[]>('/game/single/next-level', {category});
      dispatch(setTests(data));
      dispatch(updateStateFromNext());
      console.log({data})
      return data
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return []
    }
  }
)


export const exitSinglePlayerGame = createAsyncThunk<null, string>(
  'single-player-game/exitGame',
  async (gameId) => {
    try {
      await api.post<null>('/game/single/game-over', {gameId});
      toast.success('Игра завершена. Результаты сохранены')
      return null
    } catch (err) {
      console.error(err)
      toastErrorMessage(err);
      return null
    }
  }
)
