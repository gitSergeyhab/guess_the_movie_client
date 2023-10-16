import { createSlice } from "@reduxjs/toolkit";
import { SinglePlayerGame, TestFromServer } from "../../types/game-types";
import { checkSinglePlayerAnswer, fetchStartGameData, skipSinglePlayerTest, startNewLvl } from "./single-player-game-thunk";
import { OperationCategory } from "../../const/admin-const";
import { GameStatus } from "../../const/game-const";


interface InitialState extends SinglePlayerGame {
  tests: TestFromServer[];
  nextTest: SinglePlayerGame|null;
  rightAnswer: string|number|null;
  isChecking: boolean;
}

const initialState: InitialState = {
  currentTestNumber: 0,
  tests: [],
  status: GameStatus.None,
  points: 0,
  level: 0,
  isChecking: false,
  lives: 0,
  skips: 0,
  category: OperationCategory.All,
  gameId: null,
  results: [],
  nextTest: null,
  rightAnswer: null,
}


export const singlePlayerGameSlice = createSlice({
  initialState,
  name: 'singlePlayerGameSlice',
  reducers: {

    setGameStatus(state, {payload}) {
      state.status = payload;
    },

    setPreUpdateGame(state, {payload} : {payload: SinglePlayerGame}) {
      state.nextTest = payload;
    },

    setRightAnswer(state, {payload} : {payload: string|number}) {
      state.rightAnswer = payload
    },

    setCategory(state, {payload}: {payload: OperationCategory}) {
      state.category = payload;
    },

    updateStateFromNext (state) {

      const {nextTest} = state;
      if (nextTest) {
        const { currentTestNumber, level, lives, points, results, skips, status} = nextTest
        state.rightAnswer = null;

        state.currentTestNumber = currentTestNumber;
        state.level = level;
        state.lives = lives;
        state.points = points;
        state.results = results;
        state.skips = skips;
        state.status = status;
      }

      state.nextTest = null;
    },

    updateState (state, {payload} : {payload: SinglePlayerGame}) {
      const { currentTestNumber, level, lives, points, results, skips, status} = payload
      state.rightAnswer = null;

      state.currentTestNumber = currentTestNumber;
      state.level = level;
      state.lives = lives;
      state.points = points;
      state.results = results;
      state.skips = skips;
      state.status = status;
      state.nextTest = null;
    },
    setTests (state, {payload} : {payload: TestFromServer[]}) {
      state.tests = payload
    }
  },
  extraReducers: (build) => build
    .addCase(fetchStartGameData.fulfilled, (state, {payload}) => {
      const game = payload?.game;
      if (game) {
        const {gameId} = game;
        state.gameId = gameId;
      }
      state.tests = payload?.tests || [];
    })
    .addCase(fetchStartGameData.pending, (state) => {
      state.status = GameStatus.Starting;
    })
    .addCase(fetchStartGameData.rejected, (state) => {
      state.status = GameStatus.Error;
    })
    .addCase(checkSinglePlayerAnswer.fulfilled, (state) => {
      state.isChecking = false;
    })
    .addCase(checkSinglePlayerAnswer.pending, (state) => {
      state.isChecking = true;
    })
    .addCase(checkSinglePlayerAnswer.rejected, (state) => {
      state.isChecking = false;
      state.status = GameStatus.Error;
    })

    .addCase(skipSinglePlayerTest.fulfilled, (state) => {
      state.isChecking = false;
    })
    .addCase(skipSinglePlayerTest.pending, (state) => {
      state.isChecking = true;
    })
    .addCase(skipSinglePlayerTest.rejected, (state) => {
      state.isChecking = false;
      state.status = GameStatus.Error;
    })
    .addCase(startNewLvl.fulfilled, (state) => {
      state.isChecking = false;
      state.status = GameStatus.Active;
    })
    .addCase(startNewLvl.pending, (state) => {
      state.isChecking = true;
    })
    .addCase(startNewLvl.rejected, (state) => {
      state.isChecking = false;
      state.status = GameStatus.Error;
    })
})


export const {
  setPreUpdateGame, setRightAnswer,
  setCategory,
  updateStateFromNext, updateState,
  setTests,
  setGameStatus
} = singlePlayerGameSlice.actions
