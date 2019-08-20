import { action, computed, flow, observable, runInAction} from 'mobx'
import { getList } from '../server/index'

import { State } from '../types/general'

export default class TaskList<T>{
    @observable public taskList: T[] = []
    @observable public state:State = "pending"
    public section =0
    @action public getTaskListServer = async (noLoading?: boolean)=>{
        this.state = "pending"
        
        try{
            let taskList =  await getList(noLoading)
            taskList = taskList.map((ele:any,ind:any)=>{
                ele.key = this.section + '' + ind
                return ele
            })
            runInAction(()=>{
                this.taskList = this.taskList.concat(taskList)
                this.state = 'done'
                console.log(this.taskList)
                this.section ++ 
            })
            
        }catch{
            runInAction(()=>{
                this.state = 'error'
            })
            
        }
    }
    @action public setTaskList (taskList: T[]){
        this.taskList = taskList
    }
    
    @computed get getTaskList(): T[]{
        return this.taskList
    }
    @computed get getState(): State{
        return this.state
    }
    
}