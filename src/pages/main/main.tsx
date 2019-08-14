import { observer } from 'mobx-react'

import * as React from 'react'

import { Flex } from 'antd-mobile'
const Item = Flex.Item

export default observer(()=>{
    return (
        <div>
            <Flex justify="between" align="center">
                <Item>
                    <div>sdfs</div>
                </Item>
                <Item>
                    <div>qwe</div>
                </Item>
            </Flex>
        </div>
    )
})