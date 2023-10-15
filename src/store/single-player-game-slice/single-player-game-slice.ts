import { createSlice } from "@reduxjs/toolkit";
import { TestFromServer } from "../../types/game-types";
import { checkSinglePlayerAnswer, fetchSetTestsForSinglePlayer } from "./single-player-game-thunk";
import { OperationCategory } from "../../const/admin-const";


const TEST_COUNT = 3;
const MAX_LEVEL = 3;
const MISTAKES_PER_TEST = 0.4


// const getLivesPassesByLvl = (lvl) => {
//   const ratio = TEST_COUNT / MAX_LEVEL
//   const things = (MAX_LEVEL - lvl) * TEST_COUNT * 0.04
//   return {lives: Math.floor(things), passes: Math.round(things)}
// }

const getLivesPassesByLvl = (lvl: number) => {
  if (lvl >= MAX_LEVEL) {
    return {lives: 0, skips: 0}
  }

  const maxMistakeCount = TEST_COUNT * MISTAKES_PER_TEST;
  const mistakes = (MAX_LEVEL - lvl) / MAX_LEVEL * maxMistakeCount

  return {lives: Math.floor(mistakes), skips: Math.round(mistakes) || 1}
}

export const enum GameStatus {
  None = 'None',
  Starting = 'Starting',
  GoOn = 'GoOn',
  Won = 'Won',
  Lost = 'Lost',
  NextLevel = 'NextLevel',
  Error = 'Error',
}

interface InitialState {
  tests: TestFromServer[];
  currentTestNumber: number;
  gameStatus: GameStatus;
  points: number;
  level: number;
  isChecking: boolean,
  lives: number;
  skips: number;
  isAnswerCorrect: boolean|null;
  category: OperationCategory;
}

const initialState: InitialState = {
  currentTestNumber: 0,
  tests: [],
  gameStatus: GameStatus.None,
  points: 0,
  level: 0,
  isChecking: false,
  lives: getLivesPassesByLvl(0).lives,
  skips: getLivesPassesByLvl(0).skips,
  isAnswerCorrect : null,
  category: OperationCategory.All
}


export const singlePlayerGameSlice = createSlice({
  initialState,
  name: 'singlePlayerGameSlice',
  reducers: {

    setCategory(state, {payload}: {payload: OperationCategory}) {
      state.category = payload;
    },

    setAnswerCorrect(state, {payload}: {payload: boolean|null}) {
      state.isAnswerCorrect = payload;
    },
    handleExitGame (state) {
      state.gameStatus = GameStatus.None;
      state.currentTestNumber = 0;
      state.tests = [];
      state.points = 0;
    },

    // setNextTest (state) {
    //   state.currentTestNumber++
    // },

    setNextLevel (state) {
      state.level++;
    },
    skipTest (state) {
      const prevTestNumber = state.currentTestNumber;
      const isLastTest = state.tests.length <= prevTestNumber+ 1;
      if (state.skips > 0 && isLastTest) {
        state.gameStatus = state.level === MAX_LEVEL ? GameStatus.Won : GameStatus.NextLevel;
      } else if (state.skips > 0) {
        state.currentTestNumber = prevTestNumber + 1;
        state.skips--;
      }
    },
    setNewGame (state) {
      state.level = 0
      state.points = 0;
      state.gameStatus = GameStatus.None
    },
    setStopGame (state) {
      state.gameStatus = GameStatus.Won;
    },
    setCloseGame (state) {
      state.gameStatus = GameStatus.None;
      state.currentTestNumber = 0;
      state.tests = [];
      state.points = 0;
      state.level = 0;
      state.isChecking = false;
    }
  },
  extraReducers: (build) => build
    .addCase(fetchSetTestsForSinglePlayer.fulfilled, (state, {payload}) => {
      state.gameStatus = GameStatus.GoOn;
      state.currentTestNumber = 0;
      state.tests = payload;
      const {lives, skips} = getLivesPassesByLvl(state.level);
      state.lives = lives;
      state.skips = skips;
    })
    .addCase(fetchSetTestsForSinglePlayer.pending, (state) => {
      state.gameStatus = GameStatus.Starting;
    })
    .addCase(fetchSetTestsForSinglePlayer.rejected, (state) => {
      state.gameStatus = GameStatus.Error;
    })
    .addCase(checkSinglePlayerAnswer.fulfilled, (state, {payload}) => {
      console.log({...state})
      state.isChecking = false;
      const prevTestNumber = state.currentTestNumber;
      const isLastTest = state.tests.length <= prevTestNumber+ 1;

      console.log(state.tests.length, {prevTestNumber})
      if (!payload) {
        console.log('Lose __ !')
        state.currentTestNumber = 0;
        state.tests = [];
        state.gameStatus = GameStatus.Lost;
        state.isAnswerCorrect = false;

      } else if (isLastTest) {
        console.log('isLastTest __ !')
        state.points++;
        state.gameStatus = state.level === MAX_LEVEL ? GameStatus.Won : GameStatus.NextLevel;
        state.isAnswerCorrect = true;
      } else {
        console.log('Next __ !')
        state.points++;
        state.currentTestNumber = prevTestNumber + 1;
        state.gameStatus = GameStatus.GoOn;
        state.isAnswerCorrect = true;
      }
      console.log({...state})
    })
    .addCase(checkSinglePlayerAnswer.pending, (state) => {
      state.isChecking = true;
    })
    .addCase(checkSinglePlayerAnswer.rejected, (state) => {
      state.isChecking = false;
      state.gameStatus = GameStatus.Error;
    })
})


export const {setCloseGame, setNewGame, setNextLevel, setAnswerCorrect, setCategory} = singlePlayerGameSlice.actions
