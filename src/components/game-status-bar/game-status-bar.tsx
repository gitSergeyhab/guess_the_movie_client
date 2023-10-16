import { HeartTwoTone , QuestionCircleOutlined, RightSquareTwoTone, RiseOutlined, StarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/store";

export function GameStatusBar () {

  const {currentTestNumber, level, lives, points, skips, tests} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)


  return (
    <div className="game__status-bar">
      <div>
        <RightSquareTwoTone />
        {skips}
      </div>
      <div>
        <HeartTwoTone  twoToneColor="#c00f0f" />
         {lives}
      </div>

      <div> <RiseOutlined/>level: {level}</div>
      <div><QuestionCircleOutlined /> {currentTestNumber} / {tests.length}</div>
      <div> <StarOutlined />points:  {points}</div>
    </div>
  )
}
