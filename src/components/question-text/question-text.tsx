import { Typography } from 'antd';
import { getVariantText } from '../../utils/component-utils';
import { Question } from '../../types/game-types';

import './question-text.scss'

const {Paragraph, Title} = Typography;

interface QuestionTextProps {
  question: Question,
  questionText: string
}

export function QuestionText ({question, questionText}: QuestionTextProps) {

  const titleText = getVariantText(question)

  return (
    <div className='question__info'>
      <Paragraph strong className='question__text'> {questionText}: </Paragraph>
      <Title level={2} className='question__title' >{titleText}</Title>
    </div>


  )
}
