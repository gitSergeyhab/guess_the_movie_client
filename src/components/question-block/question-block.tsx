import { Question, TestType } from "../../types/game-types";
import { QuestionImage } from "../question-image/question-image";
import { QuestionText } from '../question-text/question-text';


interface QuestionBlockProps {
  question: Question;
  questionText: string;
  testType: TestType
}


export function QuestionBlock ({question, questionText, testType}: QuestionBlockProps) {
  const {imageUrl} = question;



  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(setQuestionShown(!imageUrl))
  // }, [dispatch, imageUrl]
  // )


  const imageElement = imageUrl
    ? <QuestionImage
        question={question}
        testType={testType}
      /> : null;


  return (
    <div >
      <QuestionText question={question} questionText={questionText}/>
      {imageElement}
    </div>

  )




  // if ([QuestionType.OneImageWithOutMovie, QuestionType.OneImageWithOutPerson].includes(questionType)) {
  //   return ()
  // }

}
