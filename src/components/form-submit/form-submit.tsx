import {  Form,  Button } from 'antd';


interface IFormUserName {
  text: string
}
export function FormSubmit ({text}: IFormUserName) {
  return (
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        {text}
      </Button>
    </Form.Item>
  )

}
