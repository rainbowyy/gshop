// vuex 的 actions 模块

import {reqAddress, reqCategorys, reqShops} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-types'

export default{
    //异步获取地址
   async  getAddress({commit,state}){
        //发送异步ajax请求
        const geohash=state.latitude+','+state.longitude
        const result=await reqAddress(geohash)
        if(result.data==0){
            const address=result.data
            commit(RECEIVE_ADDRESS,{address})
        }
    },

    //提交一个mutation
}