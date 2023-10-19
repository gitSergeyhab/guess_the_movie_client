import { useEffect, useState } from 'react';
import { Image } from 'antd';
import { useDispatch } from 'react-redux';
import { Question, TestType } from '../../types/game-types';
import { setTestImagesLoaded } from '../../store/game-visual-slice/game-visual-slice';

import './question-image.scss'


const getQuestionBlockClasses = (questionType: TestType) => {
  switch (questionType) {
    case TestType.MovieByFrame: return 'question-container question-container--big-image';// ok
    case TestType.PersonByMovie: return 'question-container question-container--small-image';
    case TestType.SloganByMovie: return 'question-container question-container--middle-image';
    case TestType.YearByMovie: return 'question-container question-container--middle-image';
    case TestType.MovieByPerson: return 'question-container question-container--small-image';// ok
    case TestType.PersonByPhoto: return 'question-container question-container--middle-image';// ok
    default: return 'question-container' // ok
  }
  // fr b mo
}



interface QuestionImageProps {
  question: Question;
  testType: TestType;


}
export function QuestionImage ({question, testType}: QuestionImageProps) {

  const { imageUrl, name, } = question;

  const dispatch = useDispatch()
  const [isImgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    console.log('QuestionImage useEffect setImgLoaded(false)')
    setImgLoaded(false)
  },[imageUrl]); // почему то автоматически не сбрасывается

  useEffect(() => {

    if (imageUrl) {

      setTimeout(() =>{
        console.log({imageUrl}, 'QuestionImage useEffect', { isImgLoaded})
        dispatch(setTestImagesLoaded({id: 'questionImg', value: isImgLoaded }))
      })

    }
  },[ dispatch, imageUrl, isImgLoaded ])



  const handleLImgLoaded = () => {
    console.log({imageUrl}, 'QuestionImage handleLImgLoaded', { isImgLoaded})
    setImgLoaded(true)
  };

  const classes = getQuestionBlockClasses(testType);


  return (
    <div className={classes}>
      <Image
        className='question__image'
        height="100%"
        src={imageUrl}
        alt={name}
        onLoad={handleLImgLoaded}
      />
    </div>

  )
}
