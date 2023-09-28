import { Breadcrumb, Layout, Menu, theme, MenuProps } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../const/const";



const { Header, Content, Footer } = Layout;

const loginItem = { label: 'Присоединиться', icon: <SettingOutlined />,
children: [
  {key: AppRoute.Login, label: 'Вход'},
  {key: AppRoute.Registration, label: 'Регистрация'},
]
};
const exitItem = {label: 'Выйти', key: 'exit'}




const defaultPages  = [
  {key: AppRoute.Main, label: 'Главная'},
  {key: AppRoute.Game, label: 'Игра'},

]




export function TopHeader() {




  // const user = {key: 1, label: 'Sergey'}
  const user = null;



  // const navElements = pages.map(({name, title}) => <Link key={name} to={name}>{title}</Link>)

  const navigate = useNavigate()

  const userItem = user ?
    {...user, icon: <SettingOutlined />, children: [exitItem]} :
    loginItem;





  const pages: MenuProps['items']  = [...defaultPages, userItem]

  // const items = pages.map(({key, label}) => ({key, label}))

  const onMenuClick = ({key}: {key: string}) => {
    navigate(key)
  }
  return (

  <Header style={{ display: 'flex', alignItems: 'center' }} >
    <img src='/assets/img/icon/logo.svg' alt=""  width="200px" height="100px"/>

    <Menu
      style={{width: '100%', justifyContent: 'end'}}
      onClick={onMenuClick}
      theme="dark"
      mode="horizontal"
      // defaultSelectedKeys={['2']}
      items={pages}
    />
  </Header>
  )
}
