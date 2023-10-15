import { Image } from 'antd';
import { Question } from '../../types/game-types';



export function QuestionImage ({question}: {question: Question}) {

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
