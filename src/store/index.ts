import { configure } from 'mobx'

import SayHello from './SayHello'

import TaskList from './TaskList'

configure({
    enforceActions: 'observed'
})

export const sayHello =  new SayHello()
export const taskList = new TaskList()