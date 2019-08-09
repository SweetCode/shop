import { Button } from 'antd-mobile'
import { chunk } from 'lodash'

import * as React from "react";


interface IHlloProps { compiler: string; framework: string; }

export default (props:IHlloProps) =>{
    console.log(chunk(['a', 'b', 'c', 'd'], 2))
    return (
        <div>
            <Button type="primary">
                click me!
            </Button>
        </div>
    )
} 