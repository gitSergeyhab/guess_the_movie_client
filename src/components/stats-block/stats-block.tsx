import {Table, Col, Row, Space, Tag} from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { useSelector } from 'react-redux'
import { ReducerType } from '../../store/store'
import { OperationCategory, OperationContent } from '../../const/admin-const';
import { DataStat } from '../../types/stats';








const columns= [
  {
    title: 'Контент',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: 'Мир',
    dataIndex: 'world',
    key: 'world',
  },
  {
    title: 'СССР',
    dataIndex: 'ussr',
    key: 'ussr',
  },
  {
    title: 'Россия',
    dataIndex: 'rus',
    key: 'rus',
  },

];



const getTableData = (data: DataStat[]) => data.map((item) => ({...item, key: item.content}))

export function StatsBlock () {

  const {data, dataStatsStatus} = useSelector((state: ReducerType) => state.statsSlice);

  if (dataStatsStatus.isLoading) {
    return <h2>Loading...</h2>
  }

  if (dataStatsStatus.isError || !data) {
    return <h2>Error !</h2>
  }

  return (
  <Row>
    <Col xs={24} md={{span: 12, offset: 6}}>
      <Table dataSource={getTableData(data)} columns={columns} pagination={false} />
    </Col>
  </Row>
    )
}
