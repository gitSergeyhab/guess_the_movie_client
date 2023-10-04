import { useEffect, ReactNode  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import {  Layout, theme } from 'antd';
import { ReducerType } from '../../store/store';
import { fetchTests } from '../../store/test-slice/tests-thunk';
import { QuestionBlock } from '../../components/question-block/question-block';
import { VariantButton } from '../../components/variant-button/variant-button';


const { Header } = Layout;

export function VariantList ({children} : {children: ReactNode }) {
  return (
    <ul className='variant__list'>
      {children}
    </ul>
  )
}

export function GamePage() {

  const {token: { colorBgContainer }} = theme.useToken();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTests() as unknown as AnyAction)
  // }, [dispatch])

  const {tests} = useSelector((state: ReducerType) => state.testSlice);
  if (!tests.length) {
    return     <Layout>The Game</Layout>
  }


  const {question, questionText, variants} = tests[0];

  const variantElements = variants.map((item) => <VariantButton key={item.id} variant={item}/>)

  console.log({tests})
  return (
    <Layout className='game-page'>
      {/* <Header style={{ padding: 0, background: colorBgContainer }}> */}
      <Header>
        GAME
      </Header>
      <QuestionBlock question={question} questionText={questionText}/>
      <div className='variant'>
          <VariantList>
          {variantElements}
          </VariantList>
      </div>
    </Layout>
  )
}
