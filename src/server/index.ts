import request from '../util/request'
export const getList = async ()=>{
    return await request.get('todos/1')
}