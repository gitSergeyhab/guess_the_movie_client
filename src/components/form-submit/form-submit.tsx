import {  Form,  Button } from 'antd';


interface IFormUserName {
  text: string;
  isLoading: boolean
}
export function FormSubmit ({text, isLoading}: IFormUserName) {
  return (
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" loading={isLoading}>
        {text}
      </Button>
    </Form.Item>
  )

}
