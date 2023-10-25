import { OperationCategory } from "../const/admin-const";
import { GameStatus, TestResult } from "../const/game-const";

export enum TestType {
  FrameByMovie = "FrameByMovie",
  MovieByBudget = "MovieByBudget",
  MovieByFrame = "MovieByFrame",
  MovieByPerson = "MovieByPerson",
  MovieBySlogan = "MovieBySlogan",
  MovieByYear = "MovieByYear",
  PersonByMovie = "PersonByMovie",
  PersonByPhoto = "PersonByPhoto",
  PhotoByPerson = "PhotoByPerson",
  SloganByMovie = "SloganByMovie",
  YearByMovie = "YearByMovie",
}

export interface QuestionVariant {
  name?:     string;
  imageUrl?: string;
  enName?:   null | string;
  year?:     number;
  slogan?:   string;
}


export interface Question extends QuestionVariant {
  id?:       number | string;
}

export interface Variant extends QuestionVariant {
  id:        number | string;
}

export interface TestFromServer {
  _id:          string;
  questionText: string;
  question:     Question;
  variants:     Variant[];
  category:     OperationCategory;
  testType:     TestType;
  createdAt:    Date;
  updatedAt:    Date;
}





export interface SinglePlayerGame {
  gameId: string|null;
  category: OperationCategory;
  level: number;
  status: GameStatus;
  points: number;
  skips: number;
  lives: number;
  results: TestResult[][];
  currentTestNumber: number;
}

export interface SinglePlayerGameStartData {
  game: SinglePlayerGame;
  tests: TestFromServer[]
}

export interface SinglePlayerGameCheckAnswerData {
  game: SinglePlayerGame;
  rightAnswer: string|number;
}
