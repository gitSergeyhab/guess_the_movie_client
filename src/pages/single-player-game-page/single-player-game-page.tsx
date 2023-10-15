import {  Layout } from 'antd';
import { SinglePlayerGameContent } from '../../components/single-player-game-content/single-player-game-content';
import { GameStatusBar } from '../../components/game-status-bar/game-status-bar';
import { MessageTestCheck } from '../../components/message-test-check/message-test-check';


const { Header } = Layout;

// export function VariantList ({children} : {children: ReactNode }) {
//   return (
//     <ul className='variant__list'>
//       {children}
//     </ul>
//   )
// }

export function SinglePlayerGamePage() {

  return (
    <Layout className='game-page'>
      <MessageTestCheck/>
      {/* <Header>
        GAME
      </Header> */}
      <GameStatusBar/>
      <SinglePlayerGameContent/>
    </Layout>
  )
}
