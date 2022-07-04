import { defineStore } from "pinia";
import axios from 'axios'

import { TypeChannel, TypeList,TypeNewsList,result } from '../../genericity'
// 泛型


export default defineStore('channel', {
  state() {
    return {
      list: [] as TypeList,
      active: -1,
      newlist:{} as result
    }
  },
  actions: {
    // 发送请求
    async getChannelList() {
      const res = await axios.get<TypeChannel>('http://geek.itheima.net/v1_0/channels')
      this.list = res.data.data.channels
      this.active = res.data.data.channels[0].id
      // console.log(this.list);
    },

    changeClick(active: number) {
      this.active = active
    },

    async getNewsList(){
      const res = await axios.get<TypeNewsList>('http://geek.itheima.net/v1_0/articles?',{
        params:{
          channel_id:this.active,
          timestamp:Date.now()
        }
      })
      this.newlist = res.data.data.results
      // console.log(this.newlist);
    }
  }
})