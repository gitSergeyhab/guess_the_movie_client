import { HeartTwoTone , QuestionCircleOutlined, RightSquareTwoTone, RiseOutlined, StarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/store";
import { GameStatus } from "../game-status/game-status";


import './game-status-bar.scss'

export function GameStatusBar () {

  const {currentTestNumber, level, lives, points, skips, tests} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)


  return (
    <div className="game__status-bar status-bar">
      <GameStatus/>
      <div className="status-bar__block">
        <RightSquareTwoTone />
        {skips}
      </div>
      <div>
        <HeartTwoTone  twoToneColor="#c00f0f" />
         {lives}
      </div>

      <div> <RiseOutlined/>lvl {level + 1}</div>
      <div><QuestionCircleOutlined /> {currentTestNumber + 1} / {tests.length}</div>
      <div> <StarOutlined />points:  {points}</div>
    </div>
  )
}
