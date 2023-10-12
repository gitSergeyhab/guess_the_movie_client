import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { writeTests, deleteData, deleteTests, writeData } from '../../store/admin-slice/admin-thunk';
import { OperationAction } from '../../const/admin-const';
import { ReducerType } from '../../store/store';
import { AdminButtonProps, Operation } from '../../types/admin-type';







const getLoadingBtnStatus = (state: Operation, btn: Operation, isLoading: boolean) =>
  isLoading && (state.action === btn.action) && (state.category === btn.category) && (state.content === btn.content)

const getAdminBtnAsyncThunk = ({action, content}: Operation) => {
  if (content) {
    return action === OperationAction.Delete ? deleteData : writeData
  }
  return action === OperationAction.Delete ? deleteTests : writeTests
}



export function AdminButton ({action, category, content, text}: AdminButtonProps) {

  const dispatch = useDispatch()
  const getAsyncThunk = getAdminBtnAsyncThunk({action, content, category});

  const {isLoading, processAction, processCategory, processContent} = useSelector((state: ReducerType) => state.adminSlice)

  const isButtonLoading = getLoadingBtnStatus(
    {action: processAction, category: processCategory, content: processContent},
    {action, category, content},
    isLoading
    )

  const handleWriteRusTestsButtonClick = () => {
    dispatch(getAsyncThunk({action, category, content}) as unknown as AnyAction)
  }
  return (
    <Button
      className='admin__btn'
      type="primary"
      loading={isButtonLoading}
      onClick={handleWriteRusTestsButtonClick}
      danger={action === OperationAction.Delete}
      >
      {text}
    </Button>
  )
}
