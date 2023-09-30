import { Form } from 'antd';
import { ReactNode } from 'react';

interface IFormAuth {
  children: ReactNode;
  onFinish: ((errorInfo: any) => void) | undefined;
  onFinishFailed: ((errorInfo: any) => void);
  isLoading?: boolean;

}
export function FormAuth ({children, onFinish, onFinishFailed, isLoading}: IFormAuth) {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8}}
      wrapperCol={{ span: 16, offset: 2 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      disabled={isLoading}
    >
      {children}
    </Form>
  )
}
