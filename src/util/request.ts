import axios from 'axios'

import { Toast} from 'antd-mobile'

import { api } from '../config/config'
function filterData(res:any){
    Toast.hide()
    return res.data
}
function requestError(rej:any){
    Toast.hide()
    Toast.fail('请求失败')
    throw new Error(rej)
}

function get(url:string,param?:any,noLoading?:boolean){
    url = api + url
    if(param){
      url += `?`

      for(const key of Object.keys(param)){
        url += `${key}=${param[key]}&`
      }
    }
    if(!noLoading){
        Toast.loading('加载中...',0)
    }
    return axios({
        method: 'GET',
        url,
    }).then(filterData,requestError)

}
function post(url:string,param?:any,noLoading?:boolean){
    url = api + url
    if(!noLoading){
        Toast.loading('加载中...',0)
    }
    return axios({
        data: param,
        method: 'GET',
        url
    }).then(filterData,requestError)
}

export default{
    get,
    post
}
