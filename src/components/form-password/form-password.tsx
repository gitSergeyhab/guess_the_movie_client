import {  Form, Input } from 'antd';
import { RegisterFields } from '../../types/field-type';
import { Messages } from '../../const/messages';


export function FormPassword () {
  return (
    <Form.Item<RegisterFields>
      label="Пароль"
      name="password"
      rules={[
        { required: true, message: Messages.Passwords.Required  },
        { min: 8, message: Messages.Passwords.Min },
        { max: 20, message: Messages.Passwords.Max },
      ]}
    >
      <Input.Password />
    </Form.Item>
  )

}
