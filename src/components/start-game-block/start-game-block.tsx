import { Button, Col, Layout, Row, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { OperationCategory } from "../../const/admin-const";
import { fetchSetTestsForSinglePlayer } from "../../store/single-player-game-slice/single-player-game-thunk";
import { ReducerType } from "../../store/store";
import { setCategory } from "../../store/single-player-game-slice/single-player-game-slice";


const options = [
  { value: OperationCategory.All, label: 'Все сразу' },
  { value: OperationCategory.World, label: 'Мировой' },
  { value: OperationCategory.Ussr, label: 'Советский' },
  { value: OperationCategory.Rus, label: 'Русский' },
]

export function StartGameBlock() {


  const {category} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)

  // const [category, setCategory] = useState<OperationCategory>(options[0].value);

  const dispatch = useDispatch();
  const handleCategoryChange = (value: OperationCategory) => {
    dispatch(setCategory(value));
  };

  const handleButtonClick = () => {
    dispatch(fetchSetTestsForSinglePlayer(category) as unknown as AnyAction)
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
