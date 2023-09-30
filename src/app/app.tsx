import { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { Main } from "../pages/main/main";
import { Page404 } from "../pages/page404/page404";
import { Game } from "../pages/game/game";
import { AppRoute } from "../const/const";
import { TopHeader } from "../components/header/header";
import { Login } from "../pages/login/login";
import { Registration } from "../pages/registration/registration";
import { checkAuthUser } from "../store/user-slice/user-thunk";


export function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const onError = () => navigate(AppRoute.Login);
    dispatch(checkAuthUser({onError}) as unknown as AnyAction)
  }, [dispatch, navigate])


  return (
    <Layout style={{height:"100vh"}}>
      <TopHeader/>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />}/>
          <Route path={AppRoute.Game} element={<Game />}/>
          <Route path={AppRoute.Login} element={<Login />}/>
          <Route path={AppRoute.Exit} element={<Navigate to={AppRoute.Main} replace />}/>
          <Route path={AppRoute.Registration} element={<Registration />}/>
          <Route path="*" element={<Page404 />} />
        </Routes>
    </Layout>
  )
}

