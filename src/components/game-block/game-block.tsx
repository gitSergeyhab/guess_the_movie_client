import { useSelector } from "react-redux";
import { VariantList } from "../../pages/game-page/game-page";
import { QuestionBlock } from "../question-block/question-block";
import { ReducerType } from "../../store/store";
import { VariantButton } from "../variant-button/variant-button";

export  function GameBlock() {

  const {currentTestNumber, tests} = useSelector((state: ReducerType) => state.singlePlayerGameSlice);

  if (currentTestNumber === null || !tests.length) {

    console.log({currentTestNumber, tests})
    return <h2> Error </h2>
  }

  const currentTest = tests[currentTestNumber];

  const {variants, question, questionText, _id} = currentTest;

  const variantElements = variants.map((item) => <VariantButton key={item.id} variant={item} testId={_id}/>)
  return (
    <>
      <QuestionBlock question={question} questionText={questionText}/>
      <div className='variant'>
        <VariantList>
          {variantElements}
        </VariantList>
      </div></>
  )
}
