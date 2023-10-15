import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppRoute } from "../../const/const";
import { setNewGame } from "../../store/single-player-game-slice/single-player-game-slice";

export function StopGameButton ({text}: {text: string}) {
  const dispatch = useDispatch()
  const handleButtonClick = () => {
    dispatch(setNewGame())
  }
  return (
    <Link className="game__result-btn" onClick={handleButtonClick} to={AppRoute.Game}>{text}</Link>
  )
}
