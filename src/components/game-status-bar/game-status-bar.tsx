import {  HeartTwoTone , QuestionCircleOutlined, RightSquareFilled, RightSquareTwoTone, RiseOutlined, StarOutlined } from "@ant-design/icons";
import useSelection from "antd/es/table/hooks/useSelection";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/store";

export function GameStatusBar () {

  const {currentTestNumber, gameStatus, isChecking, level, lives, points, skips, tests} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)


  return (
    <div className="game__status-bar">
      <div>
        <RightSquareTwoTone />
        <RightSquareTwoTone twoToneColor="#000" />
      </div>
      <div>
        <HeartTwoTone  twoToneColor="#c00f0f" />
        <HeartTwoTone twoToneColor="#00000095" />
      </div>

      <div> <RiseOutlined/>level: {level}</div>
      <div><QuestionCircleOutlined /> {currentTestNumber} / {tests.length}</div>
      <div> <StarOutlined />points:  {points}</div>
    </div>
  )
}
