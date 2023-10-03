import { IVariant } from "../../types/question-type";
import { QuestionImage } from "../question-image/question-image";
import { QuestionText } from '../question-text/question-text';


interface QuestionBlockProps {
  question: IVariant;
  questionText: string;
}
export function QuestionBlock ({question, questionText}: QuestionBlockProps) {
  const {imageUrl} = question;
  const imageElement = imageUrl ? <QuestionImage question={question} /> : null;

  return (
    <div >
      <div className='question-container'>
      <QuestionText question={question} questionText={questionText}/>
      {imageElement}
      </div>
    </div>
  )




  // if ([QuestionType.OneImageWithOutMovie, QuestionType.OneImageWithOutPerson].includes(questionType)) {
  //   return ()
  // }

}
