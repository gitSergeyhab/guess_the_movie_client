import {useEffect} from 'react'
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { ReducerType } from '../../store/store';
import {  OperationAction, OperationCategory, OperationContent } from '../../const/admin-const';
import { AdminTabs } from '../../components/admin-tabs/admin-tabs';
import { readData } from '../../store/admin-slice/admin-thunk';
import { fetchDataStats } from '../../store/stats-slice/stats-thunk';







export function AdminPage () {

  const {
    isError, isLoading,
    processAction, processCategory, processContent
  } = useSelector((state: ReducerType) => state.adminSlice);

  const dispatch = useDispatch()
  useEffect (() => {
    dispatch(readData(
      {action: OperationAction.Write, category: OperationCategory.Rus, content: OperationContent.Movies}
      ) as unknown as AnyAction)

  }, [dispatch])


  useEffect (() => {
    dispatch(fetchDataStats() as unknown as AnyAction)
  }, [dispatch])


  // const handleWriteRusTestsButtonClick = () => {
  //   dispatch(writeTests(MovieCategory.World) as unknown as AnyAction)
  // }

  console.log({
    isError, isLoading,
    processAction, processCategory, processContent
  })





  return (
    <Layout className='admin-page'>
      {/* <div style={{ padding: 24, minHeight: 360, background: '#FFF' }}> */}
        <AdminTabs/>
      {/* </div> */}
    </Layout>
  );
}


