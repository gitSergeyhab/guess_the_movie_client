import { Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { AppRoute } from '../../const/const';
import { RegisterFields } from '../../types/field-type';
import { FormUserName } from '../../components/form-user-name/form-user-name';
import { FormPassword } from '../../components/form-password/form-password';
import { FormPasswordRepeat } from '../../components/form-password-repeat/form-password-repeat';
import { FormSubmit } from '../../components/form-submit/form-submit';
import { FormAuth } from '../../components/form-auth/form-auth';
import { registerUser } from '../../store/user-slice/user-thunk';


const {Content} = Layout
const {Title} = Typography;


export function Registration() {

  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo: any) => {
    toast.warn(errorInfo)
  };

  const onSuccess = () => {
    setLoading(false)
    navigate(AppRoute.Login);
  }
  const onError = () => {
    setLoading(false)
  }

  const onFinish = (body: RegisterFields) => {
    setLoading(true)
    dispatch(registerUser({body, onSuccess, onError}) as unknown as AnyAction)
  }

  return (
    <Content className='auth-content'>
      <Title >Регистрация</Title>
      <FormAuth
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        isLoading={isLoading}
      >
        <FormUserName/>
        <FormPassword/>
        <FormPasswordRepeat/>
        <FormSubmit text='зарегистрироваться' isLoading={isLoading}/>
      </FormAuth>
    </Content>
  )
}
