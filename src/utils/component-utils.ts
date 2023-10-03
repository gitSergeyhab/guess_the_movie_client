import { IVariant } from "../types/question-type";

export const getVariantText = (question: IVariant) => {
  const {enName, name, slogan, year} = question;
  if (slogan) return slogan;
  return `${name || ''}${enName ? `(${enName})`  : ''}${year ? `, ${year}`  : ''}`
}
