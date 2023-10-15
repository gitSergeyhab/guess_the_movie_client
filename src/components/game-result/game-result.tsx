import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "../../store/store";

export function GameResult ({children, title}: {children: ReactNode, title: string}) {
  const {points} = useSelector((state: ReducerType) => state.singlePlayerGameSlice);


  return (
    <div className="game__result">
      <h1>{title}</h1>
      <p>ваш результат: {points}</p>
      {children}
    </div>
  )

}
