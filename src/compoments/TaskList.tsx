import * as React from 'react'

import { Button, ListView } from 'antd-mobile'

import { inject, observer } from 'mobx-react'

export default inject('store')(observer((props:any)=>{
    const data: any[] = [{
        name: '任务一'
    },{
        name: '任务二'
    },{
        name: '任务二'
    },{
        name: '任务二'
    },{
        name: '任务二'
    },{
        name: '任务二'
    }]
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
    }).cloneWithRows(data)

    const row = (rowData:any) => {
      return (<div style={{color:'#000'}}>
          {rowData.name}
      </div>)
    }
    const sayHello = ()=>{
        props.store.sayHello.setWorld('asd')
    }
    const MyBody = (BodyProps:any) =>{
        return (
          <div className="am-list-body my-body" style={{height:50,overflow:'scroll'}}>
            <span> hhh</span>
            {BodyProps.children}
          </div>
        );
    }
    console.log(props)
    return (
        <div>
            {
                props.store.sayHello.getWorld
            }
            <ListView dataSource={dataSource} renderRow={row} 
            renderScrollComponent={()=><MyBody/>}
            />
            <Button onClick={sayHello}>
                say Hello
            </Button>
        </div>
    )
}))
