
import { useSelector } from 'react-redux';
import { SmileTwoTone } from '@ant-design/icons';
import { ReducerType } from '../../store/store';
import './game-status.scss';


const enum StatusMessage {
  CheckAnswer = 'проверяем ответ',
  LoadData = 'грузим данные',
  LoadImages = 'грузим картинки'
}

interface GetStatusText {
  isChecking:  boolean;
  isDataLoading: boolean;
  isTestLoaded: boolean;
}
const getStatusText = ({isChecking, isDataLoading, isTestLoaded}: GetStatusText) => {
  const checkAnswer = isChecking ? StatusMessage.CheckAnswer : null;
  const loadData = isDataLoading ? StatusMessage.LoadData : null;
  const loadImages = !isTestLoaded ? StatusMessage.LoadImages : null;
  const statuses = [checkAnswer, loadData, loadImages].filter((item) => item)
  return statuses.length ? `${statuses.join(', ')}...` : <SmileTwoTone />;
}


export function GameStatus () {
  const {isChecking, isDataLoading} = useSelector((state: ReducerType) => state.singlePlayerGameSlice);
  const {isTestLoaded} = useSelector((state: ReducerType) => state.gameVisualSlice)
  const text = getStatusText({isChecking, isDataLoading, isTestLoaded})
  return <div className="status-bar__status">{text}</div>
}
