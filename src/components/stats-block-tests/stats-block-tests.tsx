import { useSelector } from 'react-redux'
import { ReducerType } from '../../store/store'
import { TestsStat } from '../../types/stats';
import { StatsBlock } from '../stats-block/stats-block';



const columns= [
  {
    title: 'Тип Теста',
    dataIndex: 'type',
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


const getTableTests = (data: TestsStat[]) => data.map((item) => ({...item, key: item.testType}))

export function StatsBlockTests () {

  const {tests, testsStatsStatus} = useSelector((state: ReducerType) => state.statsSlice);
  console.log({tests})

  if (testsStatsStatus.isLoading) {
    return <h2>Loading...</h2>
  }

  if (testsStatsStatus.isError || !tests) {
    return <h2>Error !</h2>
  }

  return <StatsBlock columns={columns} dataSource={getTableTests(tests)}/>
}
