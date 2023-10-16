import { Button, Col, Layout, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { OperationCategory } from "../../const/admin-const";
import { ReducerType } from "../../store/store";
import { setCategory } from "../../store/single-player-game-slice/single-player-game-slice";
import { fetchStartGameData } from "../../store/single-player-game-slice/single-player-game-thunk";


const options = [
  { value: OperationCategory.All, label: 'Все сразу' },
  { value: OperationCategory.World, label: 'Мировой' },
  { value: OperationCategory.Ussr, label: 'Советский' },
  { value: OperationCategory.Rus, label: 'Русский' },
]

export function GameStartBlock() {

  const {category} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)
  const dispatch = useDispatch();

  const handleCategoryChange = (value: OperationCategory) => {
    dispatch(setCategory(value));
  };

  const handleButtonClick = () => {
    console.log({category})
    dispatch(fetchStartGameData(category) as unknown as AnyAction)
  }

  return (
    <Layout>
      <Row>
        <Col xs={24} md={{span: 12, offset: 6}}>
          <div className="game__start-game">
            <h3>Выбирите Кинематограф</h3>
          <Select
            defaultValue={category}
            style={{ width: 120 }}
            options={options}
            onChange={handleCategoryChange}
          />
          <Button onClick={handleButtonClick}>Начать Игру</Button>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}
