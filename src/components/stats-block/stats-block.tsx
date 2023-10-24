import {Table, Col, Row} from 'antd'


interface IContent {
  key: string;
  content?: string;
  testType?: string;
  world: number;
  ussr: number;
  rus: number;
}

interface IColumns {
  title: string;
  dataIndex: string;
  key: string;
}
interface StatsBlockProps {
  dataSource: IContent[],
  columns: IColumns[]
}
export function StatsBlock ({columns, dataSource}: StatsBlockProps) {
  return (
  <Row style={{ height: '15rem', overflow: 'auto' }}>
    <Col xs={24} md={{span: 12, offset: 6}}>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </Col>
  </Row>
    )
}
