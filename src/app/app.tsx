import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useDispatch } from "react-redux";
import { Main } from "../pages/main/main";
import { Page404 } from "../pages/page404/page404";
import { AppRoute } from "../const/const";
import { TopHeader } from "../components/header/header";
import { Login } from "../pages/login/login";
import { Registration } from "../pages/registration/registration";
import { AdminPage } from "../pages/admin-page/admin-page";
import { SinglePlayerGamePage } from "../pages/single-player-game-page/single-player-game-page";
import { NoPage } from "../pages/__no-page/no-page";

const { Footer, Sider } = Layout;
export function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // useEffect(() => {
  //   const onError = () => navigate(AppRoute.Login);
  //   dispatch(checkAuthUser({onError}) as unknown as AnyAction)
  // }, [dispatch, navigate])


  return (

    <Layout className="main-layout">
      <TopHeader/>
      <Layout className="main-layout" >
        {/* <Sider collapsible defaultCollapsed collapsedWidth={40} width={220}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" />
        </Sider> */}
        <Layout>
          <Routes>
            <Route path={AppRoute.Main} element={<Main />}/>
            <Route path={AppRoute.Game} element={<SinglePlayerGamePage />}/>
            <Route path={AppRoute.Login} element={<Login />}/>
            <Route path={AppRoute.Registration} element={<Registration />}/>
            <Route path={AppRoute.Exit} element={<Navigate to={AppRoute.Main} replace />}/>
            <Route path={AppRoute.Admin} element={<AdminPage />}/>

            <Route path='no-page' element={< NoPage />}/>
            <Route path="*" element={<Page404 />} />
          </Routes>
          {/* <Footer style={{ textAlign: 'center', height: '20px' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    </Layout>
  )
}

