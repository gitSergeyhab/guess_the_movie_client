import { Layout, Menu, MenuProps } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AppRoute } from "../../const/const";
import { ReducerType } from '../../store/store';
import { setUser } from '../../store/user-slice/user-slice';
import { deleteUserDataFromLS } from '../../utils/storage-utils';


const { Header } = Layout;

const loginItem = {
  key: 'join',
  label: 'Присоединиться',
  icon: <SettingOutlined />,
  children: [
    {key: AppRoute.Login, label: 'Вход'},
    {key: AppRoute.Registration, label: 'Регистрация'},
  ]
};

const defaultPages  = [
  {key: AppRoute.Main, label: 'Главная'},
  {key: AppRoute.Game, label: 'Игра'},
]


export function TopHeader() {

  const {user} = useSelector((state: ReducerType) => state.userSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleExitClick = () => {
    dispatch(setUser(null));
    deleteUserDataFromLS();
  }

  const exitItem = {label: 'Выйти', key: AppRoute.Exit, onClick: handleExitClick}

  const userItem = user ?
    {
      key: user._id,
      label: user.name,
      icon: <SettingOutlined />,
      children: [exitItem]
    } : loginItem;

  const pages: MenuProps['items']  = [...defaultPages, userItem]

  const onMenuClick = ({key}: {key: string}) => navigate(key)

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
