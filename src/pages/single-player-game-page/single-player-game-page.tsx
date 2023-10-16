import {  Layout } from 'antd';
import { useSelector } from 'react-redux';
import { SinglePlayerGameContent } from '../../components/single-player-game-content/single-player-game-content';
import { GameStatusBar } from '../../components/game-status-bar/game-status-bar';
import { MessageTestCheck } from '../../components/message-test-check/message-test-check';
import { ReducerType } from '../../store/store';
import { GameStatus } from '../../const/game-const';


export function SinglePlayerGamePage() {
  const {status} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)

  const gameStatusBar = [GameStatus.Active, GameStatus.NextLevel].includes(status) ?
    <GameStatusBar/> : null;

  return (
    <Layout className='game-page'>
      <MessageTestCheck/>
        {gameStatusBar}
      <SinglePlayerGameContent/>
    </Layout>
  )
}
