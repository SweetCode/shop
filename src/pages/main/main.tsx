import { observer } from 'mobx-react'

import * as React from 'react'

import TaskList from '../../compoments/taskList'

import { Badge, Tabs } from 'antd-mobile'

const useState = React.useState

export default observer(()=>{
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
            <Tabs tabs={tabs}>
                <TaskList/>
                <div>
                    first page
                </div>
                <div>
                    {taskType}
                </div>
            </Tabs>
        </div>
    )
})