import * as React from 'react'

import { Button, ListView, PullToRefresh, SwipeAction } from 'antd-mobile'

import { inject, observer } from 'mobx-react'

import { withRouter } from 'react-router'

const { useEffect, useState } = React
import { State } from '../types/general'
import { ITaskItem } from '../types/ITaskItem'

function TaskList(props:any){
    const taskList = props.store.taskList
    
    const [ loadType , setLoadType] = useState('' as 'load' | 'refresh')
    useEffect(()=>{
        taskList.getTaskListServer(false)
        
    },[])

    const dataSource = new ListView.DataSource({
        rowHasChanged: () => true,
    }).cloneWithRows(taskList.getTaskList)

    const row = (rowData:ITaskItem) => {
      return (
          <div key={rowData.key}>
          <SwipeAction
            key = {rowData.key}
            style={{ backgroundColor: 'gray' }}
            autoClose = { true }
            right={[
                {
                onPress: () => console.log('cancel'),
                style: { backgroundColor: '#ddd', color: 'white' },
                text: 'Cancel',
                },
                {
                onPress: () => console.log('delete'),
                style: { backgroundColor: '#F4333C', color: 'white' },
                text: 'Delete',
                },
            ]}
            left={[
                {
                onPress: () => console.log('reply'),
                style: { backgroundColor: '#108ee9', color: 'white' },
                text: 'Reply',
                },
                {
                onPress: () => console.log('cancel'),
                style: { backgroundColor: '#ddd', color: 'white' },
                text: 'Cancel',
                },
            ]}
            onOpen={() => console.log('global open')}
            onClose={() => console.log('global close')}
            >
            <div className="p-3" style={{color:'#000'}} onClick = {()=>props.history.push('/detail')}>
                 {rowData.key}
                 <div>
                     {rowData.name}
                 </div>
            </div>
        </SwipeAction>
        </div>
        )
    }
    const onEndReached = ()=>{
        if(!(taskList.getState as State === 'pending')){
            setLoadType('load')
            taskList.getTaskListServer(true)
        }
    }
    const separator = (sectionID:any, rowID:any) => {
        return (
        <div key={rowID}
          style={{
            backgroundColor: '#F5F5F9',
            borderBottom: '1px solid #ECECED',
            borderTop: '1px solid #ECECED',
            height: 10,
          }}
        />)
    }

    const onRefresh = ()=>{
        setLoadType('refresh')
        taskList.getTaskListServer()
    }
    return (
        <div>
            <ListView dataSource={dataSource} renderRow={row} 
            // renderBodyComponent={()=><MyBody/>}

            renderFooter={() => (
            <div>
                {taskList.getState as State ==='pending' && loadType === 'load' ? <div style={{ padding: 50, textAlign: 'center' }}>
                    loading
                </div> : ''}
            </div>)}
            onEndReached={onEndReached}
            renderSeparator = {separator}
            pageSize={3}
            scrollRenderAheadDistance = { 100 }
            onEndReachedThreshold = { 1 }
            pullToRefresh={
            <PullToRefresh
                refreshing={taskList.getState as State ==='pending' && loadType === 'refresh'}
                onRefresh={onRefresh}
                getScrollContainer={() => {
                    return ''
                }}
                direction= {'down'}
                distanceToRefresh={window.devicePixelRatio * 25}
                damping={100}
                indicator={{
                    activate: '释放立即刷新',
                    deactivate: '下拉刷新',
                    release: '您的货物来啦...',
                    finish: '请开始您的表演吧'
                }}
              />}
            style={{
                height:'90vh',
                overflow:'scroll'
            }}
            />
        </div>
    )
}
export default inject('store')(withRouter(observer(TaskList)))
