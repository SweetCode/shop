import * as React from 'react'

import { Button, ListView } from 'antd-mobile'

import { inject, observer } from 'mobx-react'

const { useEffect } = React

function TaskList(props:any){
    const taskList = props.store.taskList

    useEffect(()=>{
        taskList.getTaskListServer()
    },[])

    const getSectionData = (dataBlob:any[], sectionID:any) => {
        return dataBlob[sectionID]
    };
    const getRowData = (dataBlob:any[], sectionID:any, rowID:any) => {
        return dataBlob[sectionID][rowID]
    };
    const dataSource = new ListView.DataSource({
        getRowData,
        getSectionHeaderData: getSectionData,
        rowHasChanged: (row1:any, row2:any) => row1 !== row2,
        sectionHeaderHasChanged: (s1:any, s2:any) => s1 !== s2,
    }).cloneWithRows(taskList.getTaskList)

    const row = (rowData:any) => {
      return (<div style={{color:'#000'}}>
          {rowData.title}
      </div>)
    }
 
    const MyBody = (BodyProps:any) =>{
        return (
          <div>
            <span style={{ display: 'none' }}>you can custom body wrap element</span>
            {BodyProps.children}
          </div>
        );
    }
    const onEndReached = ()=>{
        console.log('loading')
    }
    const separator = (sectionID:any, rowID:any) => (
        <div
          key={`${sectionID}-${rowID}`}
          style={{
            backgroundColor: '#F5F5F9',
            borderBottom: '1px solid #ECECED',
            borderTop: '1px solid #ECECED',
            height: 8,
          }}
        />)
    return (
        <div>
            <ListView dataSource={dataSource} renderRow={row} 
            renderBodyComponent={()=><MyBody/>}
            // useBodyScroll
            onEndReached={onEndReached}
            initialListSize={200}
            renderSeparator = {separator}
            scrollRenderAheadDistance={500}
            className="am-list"
            pageSize={4}
            onScroll={() => { console.log('scroll'); }}
            onEndReachedThreshold={10}
            style={{
                height:'80vh',
                overflow:'scroll'
            }}
            />
        </div>
    )
}
export default inject('store')(observer(TaskList))
