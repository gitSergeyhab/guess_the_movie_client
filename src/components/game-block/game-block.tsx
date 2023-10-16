import { useSelector } from "react-redux";

import { ReducerType } from "../../store/store";
import { TestBlock } from "../test-block/test-block";

export  function GameBlock() {

  const {currentTestNumber, tests} = useSelector((state: ReducerType) => state.singlePlayerGameSlice);

  if (currentTestNumber === null || !tests.length) {
    console.log({currentTestNumber, tests})
    return <h2> Error </h2>
  }

  const currentTest = tests[currentTestNumber];
  console.log({currentTest, tests, currentTestNumber})

  return <TestBlock  test={currentTest}/>
}
