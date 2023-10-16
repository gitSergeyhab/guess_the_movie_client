import { TestFromServer } from "../../types/game-types";
import { VariantButton } from "../variant-button/variant-button";
import { QuestionBlock } from "../question-block/question-block";
import { VariantList } from "../../pages/game-page/game-page";
import { ButtonNextTest } from "../button-next-test/button-next-test";

interface TestBlockProps {
  test: TestFromServer;

}


export function TestBlock ({test}: TestBlockProps) {


  const {variants, question, questionText, _id} = test;

  const variantElements = variants.map((item) =>
    <VariantButton key={item.id} variant={item} testId={_id}/>)
  return (
    <>
      <QuestionBlock question={question} questionText={questionText}/>
      <ButtonNextTest/>
      <div className='variant'>
        <VariantList>
          {variantElements}
        </VariantList>
      </div></>
  )
}
