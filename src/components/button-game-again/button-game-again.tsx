import { useDispatch } from "react-redux";
import { Button } from "antd";
import { setGameStatus } from "../../store/single-player-game-slice/single-player-game-slice";
import { GameStatus } from "../../const/game-const";

export function ButtonGameAgain () {
  const dispatch = useDispatch()
  const handleButtonClick = () => {
    dispatch(setGameStatus(GameStatus.None))
  }
  return (
    <Button onClick={handleButtonClick}>Сыграть снова</Button>
  )
}
