import { useSelector } from "react-redux"
import { message } from 'antd';
import { useEffect } from "react";
import { ReducerType } from "../../store/store";

export function MessageTestCheck() {

  const { isAnswerCorrect } = useSelector((state: ReducerType) => state.singlePlayerGameSlice);

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (isAnswerCorrect === true) {
      messageApi.open({ type: 'success', content: 'Правильно!' })
    }
    if (isAnswerCorrect === false) {
      messageApi.open({ type: 'error', content: 'Ошибка!' })
    }
  }, [isAnswerCorrect, messageApi])

  if (isAnswerCorrect === null) {
    return null;
  }
  return contextHolder
}
