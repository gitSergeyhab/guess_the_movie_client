import { Tabs } from 'antd';
import { AdminDataBlock } from '../admin-data-block/admin-data-block';
import { AdminTestsBlock } from '../admin-tests-block/admin-tests-block';



const TabContent = [
  {
    label: 'Данные',
    key: 'data',
    children: <AdminDataBlock/>
  },

  {
    label: 'Тесты',
    key: 'tests',
    children: <AdminTestsBlock/>
  }
]

export function AdminTabs () {
  return(
    <Tabs
      type="card"
      items={TabContent}
    />
  );
}



