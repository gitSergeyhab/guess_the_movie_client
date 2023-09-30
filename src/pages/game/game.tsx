import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { fetchUsers } from '../../store/user-slice/user-thunk'

export function Game() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers() as unknown as AnyAction)
  }, [dispatch])


  return (
    <div>
      The Game
    </div>
  )
}
