import { useSelector } from "react-redux";
import {Spin } from 'antd';
import { TestFromServer, Variant } from "../../types/game-types";
import { VariantButton } from "../variant-button/variant-button";
import { QuestionBlock } from "../question-block/question-block";
import { ButtonNextTest } from "../button-next-test/button-next-test";
import { ReducerType } from "../../store/store";

import './test-block.scss';

const filterVariants = (variants: Variant[]) =>
  variants.reduce((acc, item) => {
    const {id} = item
    if (acc.map(x => x.id).includes(id) ) {
      return acc;
    }
    acc.push(item);
    return acc;
  } , [] as Variant[])

interface TestBlockProps {
  test: TestFromServer;
}

export function TestBlock ({test}: TestBlockProps) {

  const isTestLoaded = useSelector((state: ReducerType) => state.gameVisualSlice.isTestLoaded)
  const {variants, question, questionText, _id, testType} = test;

  const variantElements = filterVariants(variants).map((item) =>
    <VariantButton key={item.id} variant={item} testId={_id}/>)

  const spinner = isTestLoaded ? null :
    <Spin size="large" className="test-block__spinner" tip={<>Грузим картинки...</>}  >
      <div className="content"/>
    </Spin>;

  const testBlockClasses = isTestLoaded ? 'test-block' : 'test-block test-block--hidden';
  return (
    <>
      {spinner}
      <div className={testBlockClasses}>
        <QuestionBlock question={question} questionText={questionText} testType={testType}/>
        <div className="test__next-btn-wrapper">
          <ButtonNextTest/>
        </div>
        <ul className='variant__list'>
          {variantElements}
        </ul>
      </div>
    </>
  )
}
