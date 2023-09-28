import {  Form, Input } from 'antd';
import { FieldType } from '../../type/field-type';
import { Messages } from '../../const/messages';


export function FormUserName () {
  return (
    <Form.Item<FieldType>
      label="Имя"
      name="username"
      rules={[
        { required: true, message: Messages.UserName.Required },
        { min: 3, message: Messages.UserName.Min  },
        { max: 13, message: Messages.UserName.Max  }
      ]}
    >
      <Input />
    </Form.Item>
  )

}
