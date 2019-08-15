import { action, computed, flow, observable, runInAction} from 'mobx'
import { getList } from '../server/index'

export default class TaskList{
    public getTaskListServer = flow(function * (){
        this.taskList = []
        this.state = "pending"
        try{
            const taskList =  yield getList()
            this.taskList = taskList
            console.log(taskList)
            this.state = 'done'
        }catch{
            this.state = 'error'
        }
        
    })
    @observable public taskList: any[] = []
    @observable public state:'pending'|'done'|'error' = "pending"
    @action public setTaskList (taskList: any[]){
        this.taskList = taskList
    }
    
    @computed get getTaskList(){
        return this.taskList
    }
    @computed get getState(){
        return this.state
    }
    
}