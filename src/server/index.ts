import request from '../util/request'
export const getList = ()=>{
    return request.get('todos')
}