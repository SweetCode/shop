import { observer } from 'mobx-react'

import * as React from 'react'

import Detail from '../detail/Detail'

import TaskList from '../../compoments/taskList'

import { Badge, Tabs } from 'antd-mobile'
import { Route } from 'react-router-dom';

const useState = React.useState

function Main(){
    const [taskType,setTaskType] = useState(0)
    const tabs = [
        {
            title: '全部'
        },{
            title: <Badge text="0">已完成</Badge>,
        },{
            title: <Badge text="0">未完成</Badge>,
        }
    ]
    
    return (
        <div>
            <Tabs tabs={tabs} />
            <TaskList />
            <Route name="detail" path="/detail" component={Detail}/>
        </div>
    )
}
export default observer(Main)