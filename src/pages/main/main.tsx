import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AnyAction } from "@reduxjs/toolkit"
import { Layout } from "antd"
import { fetchWorkData } from "../../store/user-slice/user-thunk"

export function Main() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWorkData() as unknown as AnyAction)
  }, [dispatch])


  return (
    <Layout>
      <aside>Left</aside>
      <div>Center</div>
      <aside>Right</aside>
    </Layout>
  )
}
