import * as React from 'react'

import { observer, inject } from 'mobx-react'

function Detail(props:any){
    return (
        <div style={{position:"absolute",zIndex:9999,top:0,backgroundColor:'#FFF',width:'100vw',height:'100vh'}}>
            Detail
        </div>
    )
}

export default inject('store')(observer(Detail))
