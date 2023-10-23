import {  Layout } from 'antd';
import { useSelector } from 'react-redux';
import { SinglePlayerGameContent } from '../../components/single-player-game-content/single-player-game-content';
import { GameStatusBar } from '../../components/game-status-bar/game-status-bar';
import { GameProgressBar } from '../../components/game-progress-bar/game-progress-bar';
import { ReducerType } from '../../store/store';

import { GameStatus } from '../../const/game-const';

import './single-player-game-page.scss'

export function SinglePlayerGamePage() {
  const {status} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)

  const [gameStatusBar, gameProgressBar] = [GameStatus.Active, GameStatus.NextLevel].includes(status) ?
    [<GameStatusBar/>, <GameProgressBar/>] : [null, null];


  return (
    <Layout className='game-page'  >
        {gameStatusBar}
        {gameProgressBar}
      <SinglePlayerGameContent/>
    </Layout>
  )
}
