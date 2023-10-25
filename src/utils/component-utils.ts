import { QuestionVariant } from "../types/game-types";

export const getVariantText = (question: QuestionVariant) => {
  const {name, slogan, year} = question;
  if (slogan) return slogan;
  if (!name && year) return year;
  return `${name || ''}${year ? `, ${year}`  : ''}`
}
