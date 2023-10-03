import { useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { Main } from "../pages/main/main";
import { Page404 } from "../pages/page404/page404";
import { AppRoute } from "../const/const";
import { TopHeader } from "../components/header/header";
import { Login } from "../pages/login/login";
import { Registration } from "../pages/registration/registration";
import { checkAuthUser } from "../store/user-slice/user-thunk";
import { AdminPage } from "../pages/admin-page/admin-page";
import { GamePage } from "../pages/game-page/game-page";

const { Footer, Sider } = Layout;
export function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const onError = () => navigate(AppRoute.Login);
    dispatch(checkAuthUser({onError}) as unknown as AnyAction)
  }, [dispatch, navigate])


  return (

    <Layout className="main-layout">
      <TopHeader/>
      <Layout>
        <Sider collapsible  collapsedWidth={75} width={250}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" /* items={items} *//>
        </Sider>
        <Layout>
          <Routes>
            <Route path={AppRoute.Main} element={<Main />}/>
            <Route path={AppRoute.Game} element={<GamePage />}/>
            <Route path={AppRoute.Login} element={<Login />}/>
            <Route path={AppRoute.Registration} element={<Registration />}/>
            <Route path={AppRoute.Exit} element={<Navigate to={AppRoute.Main} replace />}/>
            <Route path={AppRoute.Admin} element={<AdminPage />}/>
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

