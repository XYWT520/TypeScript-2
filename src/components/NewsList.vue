<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import useChannel from '../store';
const { channel } = useChannel() 
const { newlist,active } = storeToRefs(channel)
watch(active,() => {
  // console.log('触发了侦听');
  channel.getNewsList()
})
</script>

<template>
  <div className="list" v-for="item in newlist" >
    <div className="article_item">
      <h3 className="van-ellipsis"></h3>
      <div className="img_box">
        <!-- src="http://geek.itheima.net/resources/images/11.jpg" -->
        <img
        :src="item.cover.images?.[0]"
          className="w100"
          alt=""
        />
      </div>
      <div className="info_box">
        <span>13552285417</span>
        <span>0评论</span>
        <span>2018-11-29T17:02:09</span>
      </div>
    </div>
  </div>
</template>

<style scoed lang="less"></style>
