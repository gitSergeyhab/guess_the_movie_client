import { useSelector } from 'react-redux'
import { ReducerType } from '../../store/store';
import { GameStatus } from '../../store/single-player-game-slice/single-player-game-slice';
import { StartGameBlock } from '../start-game-block/start-game-block';
import { GameBlock } from '../game-block/game-block';
import { GameLostBlock } from '../game-lost-block/game-lost-block';
import { GameWonBlock } from '../game-won-block/game-won-block';
import { GameNextLevelBlock } from '../game-next-level-block/game-next-level-block';




export function SinglePlayerGameContent() {

  const {gameStatus} = useSelector((state: ReducerType) => state.singlePlayerGameSlice);

  switch (gameStatus) {
    case GameStatus.Error: return <h2>Что-то пошло не так...</h2>;
    case GameStatus.Lost: return <GameLostBlock/>
    case GameStatus.NextLevel: return <GameNextLevelBlock/>
    case GameStatus.None: return <StartGameBlock/>;
    case GameStatus.Starting: return <h2>Грузим вопросы...</h2>;
    case GameStatus.Won: return <GameWonBlock/>
    default: return <GameBlock/>
  }
}
