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
          <div className="am-list-body my-body" style={{height:150,overflow:'scroll'}}>
            {BodyProps.children}
          </div>
        );
    }
    return (
        <div>
            <ListView dataSource={dataSource} renderRow={row} 
            renderScrollComponent={()=><MyBody/>}
            />
        </div>
    )
}
export default inject('store')(observer(TaskList))