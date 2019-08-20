import request from '../util/request'
export const getList = (noLoading? : boolean)=>{
    return request.get('users',{},noLoading)
}