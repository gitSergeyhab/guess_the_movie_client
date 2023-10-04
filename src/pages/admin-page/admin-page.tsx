import {useState} from 'react'
import { Breadcrumb, Layout, theme, Button, Space } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { ReducerType } from '../../store/store';
import { writeRusTests } from '../../store/admin-slice/admin-thunk';




export function AdminPage () {

  const {isTestsUploadError, isTestsUploading} = useSelector((state: ReducerType) => state.adminSlice);
  const dispatch = useDispatch()

  const handleWriteRusTestsButtonClick = () => {
    dispatch(writeRusTests() as unknown as AnyAction)
  }


  return (
    <Layout >

      <Layout>
        <div>
          {isTestsUploadError ? 'Error' : '...'}
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div style={{ padding: 24, minHeight: 360, background: '#FFF' }}>
          <Space wrap>
        <Button type="primary" loading={isTestsUploading} onClick={handleWriteRusTestsButtonClick}>
          Записать тесты по русским фильмам
        </Button>
        {/* <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
        /> */}
      </Space>
          </div>
        </div>
      </Layout>
    </Layout>
  );
}
