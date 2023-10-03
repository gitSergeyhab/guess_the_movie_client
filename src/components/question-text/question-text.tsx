import { Typography } from 'antd';
import { IVariant } from '../../types/question-type';
import { getVariantText } from '../../utils/component-utils';



const {Paragraph, Title} = Typography;

interface QuestionTextProps {
  question: IVariant,
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
