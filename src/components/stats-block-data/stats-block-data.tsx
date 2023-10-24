import { useSelector } from 'react-redux'
import { ReducerType } from '../../store/store'
import { DataStat } from '../../types/stats';
import { StatsBlock } from '../stats-block/stats-block';



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

export function StatsBlockData () {

  const {data, dataStatsStatus} = useSelector((state: ReducerType) => state.statsSlice);

  if (dataStatsStatus.isLoading) {
    return <h2>Loading...</h2>
  }

  if (dataStatsStatus.isError || !data) {
    return <h2>Error !</h2>
  }

  return <StatsBlock columns={columns} dataSource={getTableData(data)}/>
}
