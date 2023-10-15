import { QuestionVariant } from "../types/game-types";
import { IVariant } from "../types/question-type";

export const getVariantText = (question: QuestionVariant) => {
  const {enName, name, slogan, year} = question;
  if (slogan) return slogan;
  return `${name || ''}${enName ? `(${enName})`  : ''}${year ? `, ${year}`  : ''}`
}
