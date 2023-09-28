
import { Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL, AppRoute } from '../../const/const';
import { Messages } from '../../const/messages';
import { FieldType } from '../../type/field-type';
import { FormUserName } from '../../components/form-user-name/form-user-name';
import { FormPassword } from '../../components/form-password/form-password';
import { FormPasswordRepeat } from '../../components/form-password-repeat/form-password-repeat';
import { FormSubmit } from '../../components/form-submit/form-submit';
import { FormAuth } from '../../components/form-auth/form-auth';


const {Content} = Layout
const {Title} = Typography;

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};



export function Registration() {

  const navigate = useNavigate();

  const onSuccess = () => {
    toast.success('Reg Ok')
    navigate(AppRoute.Login)
  }
  const onError = () => {
    toast.error('Регистрация недоступна. Пробуйте позже')
  }


  const onFinish = (values: FieldType) => {
    axios.post(`${API_URL}/user/registration`, values)
      .then(onSuccess)
      .catch(onError)
  }

  return (
    <Content className='auth-content'>
      <Title >Регистрация</Title>
      <FormAuth onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormUserName/>
        <FormPassword/>
        <FormPasswordRepeat/>
        <FormSubmit text='зарегистрироваться'/>
      </FormAuth>
    </Content>
  )
}
