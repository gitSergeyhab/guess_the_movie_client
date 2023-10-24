import {useEffect} from 'react'
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import {  OperationAction, OperationCategory, OperationContent } from '../../const/admin-const';
import { AdminTabs } from '../../components/admin-tabs/admin-tabs';
import { readData } from '../../store/admin-slice/admin-thunk';
import { fetchDataStats, fetchTestStats } from '../../store/stats-slice/stats-thunk';

import './admin-page.scss'


export function AdminPage () {

  const dispatch = useDispatch()
  useEffect (() => {
    dispatch(readData(
      {action: OperationAction.Write, category: OperationCategory.Rus, content: OperationContent.Movies}
      ) as unknown as AnyAction)

  }, [dispatch])


  useEffect (() => {
    dispatch(fetchDataStats() as unknown as AnyAction)
  }, [dispatch])

  useEffect (() => {
    dispatch(fetchTestStats() as unknown as AnyAction)
  }, [dispatch])


  return (
    <Layout className='admin-page'>
      <AdminTabs/>
    </Layout>
  );
}


