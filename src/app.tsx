import { Button } from 'antd-mobile'
import { chunk } from 'lodash'
import { observer } from 'mobx-react'
import SayHello from './store/SayHello'

import * as moment  from 'moment'
import * as React from "react";


interface IHlloProps { compiler: string; framework: string; }


export default observer((props:IHlloProps) =>{
    console.log(chunk(['a', 'b', 'c', 'd'], 2))
    return (
        <div>
            {
                moment().format('YYYY-dd')
            }
            <Button type="primary" onClick={sayHello}>
                click 
            </Button>
            {
                SayHello.getWorld
            }
        </div>
    )
    function sayHello(){
        SayHello.setWorld('say hello')
    }
})