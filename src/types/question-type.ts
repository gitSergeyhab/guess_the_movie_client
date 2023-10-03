// export interface OnePersonWitImage {
//   id: number;
//   name: string;
//   imageUrl: string;
// }

import { AnswerType, QuestionType } from "../const/tests";

// export interface OneMovieWithImage {
//   id: number;
//   name: string;
//   enName?: string|null;
//   year: number;
//   imageUrl: string;
// }


// export interface PersonByMovieQuestion {
//   variants: OnePersonWitImage[];
//   question: OneMovieWithImage & {
//       text: string,

//   };
// }

export interface IVariant {
  id: number;
  enName?: string;
  name?: string;
  year?: number;
  imageUrl?: string;
  slogan?: string;
}

export interface ITest {
  questionText: string;
  questionType: QuestionType;
  question: IVariant;
  variantsType: AnswerType;
  variants: IVariant[]
}
