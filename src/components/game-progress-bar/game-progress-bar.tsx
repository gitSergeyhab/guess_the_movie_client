import { useSelector } from "react-redux";
import { CheckCircleTwoTone, CloseCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import { ReducerType } from "../../store/store";
import { TestResult } from "../../const/game-const";


const getStatusIcon = (testResult: TestResult, item: number) => {
  switch (testResult) {
    case TestResult.RIGHT: return <CheckCircleTwoTone key={item}  twoToneColor='#047b00' />;
    case TestResult.WRONG: return <CloseCircleTwoTone key={item}  twoToneColor='#921300'  />
    default: return <RightCircleTwoTone key={item} />
  }
}

const getStatusIcons = (testResults: TestResult[]) => testResults.map((item, i) => getStatusIcon(item, i))
const getStatusIconLists = (testResults: TestResult[][]) => testResults.map(getStatusIcons).map((item) => [item, <>&nbsp;&nbsp;</>])

export function GameProgressBar () {

  const {results} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)


  const res = getStatusIconLists(results)
  console.log({results, res})

  return (
    <div className="game__status-bar status-bar status-bar--progress">
        {res}
    </div>
  )
}
