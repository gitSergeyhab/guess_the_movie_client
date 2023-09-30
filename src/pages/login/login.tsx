import { Layout, Typography } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AnyAction } from '@reduxjs/toolkit';
import { FormAuth } from '../../components/form-auth/form-auth';
import { FormUserName } from '../../components/form-user-name/form-user-name';
import { FormPassword } from '../../components/form-password/form-password';
import { FormSubmit } from '../../components/form-submit/form-submit';
import { AppRoute } from '../../const/const';
import { RegisterFields } from '../../types/field-type';
import { loginUser } from '../../store/user-slice/user-thunk';


const {Content} = Layout
const {Title} = Typography;


export function Login() {
  const [isLoading, setLoading] = useState<boolean>(false);
  console.log({isLoading})

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo: any) => {
    toast.warn(errorInfo)
  };

  const onSuccess = () => {
    setLoading(false)
    navigate(AppRoute.Game);
  }
  const onError = () => {
    console.log('ON_ERROR')
    setLoading(false)
  }


  const onFinish = (body: RegisterFields) => {
    setLoading(true)
    dispatch(loginUser({body, onSuccess, onError}) as unknown as AnyAction)
  }
  return (
    <Content className='auth-content'>
      <Title >Вход</Title>
      <FormAuth onFinish={onFinish} onFinishFailed={onFinishFailed} isLoading={isLoading}>
        <FormUserName/>
        <FormPassword/>
        <FormSubmit text='войти' isLoading={isLoading}/>
      </FormAuth>
    </Content>
  )
}
