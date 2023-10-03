import { createSlice } from "@reduxjs/toolkit";
import { ITest, IVariant } from "../../types/question-type";
import { fetchTests } from "./tests-thunk";
import { AnswerType, QuestionType } from "../../const/tests";


const variants: IVariant[] = [
  {
      "id": 731804,
      "imageUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_731804.jpg",
      "name": "Зак Эфрон"
  },
  {
      "id": 23137,
      "imageUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_23137.jpg",
      "name": "Джей О. Сэндерс"
  },
  {
      "id": 10022,
      "imageUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_10022.jpg",
      "name": "Ричард Харрис"
  },
  {
      "id": 6652,
      "imageUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_6652.jpg",
      "name": "Джефф Бриджес"
  },
  {
      "id": 33496,
      "imageUrl": "https://st.kp.yandex.net/images/actor_iphone/iphone360_33496.jpg",
      "name": "Мартин Фриман",
      year: 2222,
      enName: 'Some Film ldld dsdkfj kd d slsdk',
      // slogan: 'slogan !!'

  }
]

const tests: ITest[] = [
  {
    "question": {
        "id": 602677,
        "imageUrl": "https://st.kp.yandex.net/images/film_iphone/iphone360_602677.jpg",
        "name": "Соседи. На тропе войны",
        "year": 2014,
        "enName": "Townies"
    },
    "questionText": "Кто из них имеет отношение к этому фильму",
    "questionType": QuestionType.OneMovieWithImage,
    "variantsType": AnswerType.OnePersonWitImage,
    "variants": variants,
  },
  {
    question: {
      id: 1,
      slogan: 'slogan 1'
    },
    questionText: 'какого фильма слоган',
    variants,
    questionType: QuestionType.Slogan,
    variantsType: AnswerType.OnePersonWitImage
  },
  {
    question: {
      id: 2,
      imageUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_731804.jpg',
    },
    questionText: 'какого фильма кадр/ кто на фото',
    variants,
    questionType: QuestionType.Slogan,
    variantsType: AnswerType.OnePersonWitImage
  }
]

interface InitialState {
  tests: ITest[];
  currentTest: ITest|null;
}

const initialState: InitialState = {
  tests: [tests[2]],
  currentTest: null
}

export const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setTests(state, {payload} : {payload: ITest[]}) {
      state.tests = payload;
    },
    setCurrentTest(state, {payload} : {payload: ITest}) {
      state.currentTest = payload;
    }
  },
  extraReducers: (build) =>
    build
      .addCase(fetchTests.fulfilled, (state, data) => {
        state.tests = data.payload
      })
})
