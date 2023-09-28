
import { Layout, Typography } from 'antd';
import { FormAuth } from '../../components/form-auth/form-auth';
import { FormUserName } from '../../components/form-user-name/form-user-name';
import { FormPassword } from '../../components/form-password/form-password';
import { FormSubmit } from '../../components/form-submit/form-submit';

const {Content} = Layout
const {Title} = Typography;


const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export function Login() {
  return (
    <Content className='auth-content'>
      <Title >Вход</Title>
      <FormAuth onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormUserName/>
        <FormPassword/>
        <FormSubmit text='войти'/>
      </FormAuth>
    </Content>
  )
}
