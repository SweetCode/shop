import { configure } from 'mobx'

import SayHello from './SayHello'

import TaskList from './TaskList'

import { TaskItem } from '../types/TaskItem'

configure({
    enforceActions: 'observed'
})

export const sayHello =  new SayHello()
export const taskList = new TaskList<TaskItem>()