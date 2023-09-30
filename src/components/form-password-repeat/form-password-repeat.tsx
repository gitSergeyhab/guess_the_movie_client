import {  Form, Input } from 'antd';
import { RegisterFields } from '../../types/field-type';
import { Messages } from '../../const/messages';


export function FormPasswordRepeat () {
  return (
    <Form.Item<RegisterFields>
      label="Снова пароль"
      name="passwordRepeat"
      rules={[
        { required: true, message: Messages.Passwords.Required  },
        ({getFieldValue}) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve()
            }
            return Promise.reject(new Error(Messages.Passwords.Match));
          }
        })
      ]}
      dependencies={['password']}
      hasFeedback
    >
      <Input.Password />
    </Form.Item>
  )

}
