import { createSlice } from "@reduxjs/toolkit";

interface ImageStateDict {[key: string|number] : boolean}

interface InitialState {
  isTestLoaded: boolean;
  dictImageLoadStatus: ImageStateDict
}

const initialState: InitialState = {
  isTestLoaded: false,
  dictImageLoadStatus: {}
}

export const gameVisualSlice = createSlice({
  initialState,
  name: 'gameVisualSlice',
  reducers: {
    resetTest(state) {
      // state.isTestLoaded = false;
      state.dictImageLoadStatus = {}
    },

    setTestImagesLoaded(state, {payload} : {payload: {id: string|number; value: boolean}}) {
      const {id, value} = payload
      state.dictImageLoadStatus[id] = value;
      const areEveryImageAnswersLoaded =  Object.values(state.dictImageLoadStatus).filter((item) => !item).length < 1;
      const dict = {...state.dictImageLoadStatus}
      console.log('gameVisualSlice', {id, value, dict, areEveryImageAnswersLoaded})
      state.isTestLoaded = areEveryImageAnswersLoaded;
    }
  },
})


export const {  resetTest, setTestImagesLoaded } = gameVisualSlice.actions
