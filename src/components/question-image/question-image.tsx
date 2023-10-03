import { Image } from 'antd';
import { IVariant } from '../../types/question-type';



export function QuestionImage ({question}: {question: IVariant}) {

  const { imageUrl, name} = question;

  return (
      <Image
        className='question__image'
        height={150}
        src={imageUrl}
        alt={name}
      />
  )
}
