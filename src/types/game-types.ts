import { OperationCategory } from "../const/admin-const";

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
