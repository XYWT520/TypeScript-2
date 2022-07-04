<script lang="ts" setup>
import useChannel from '../store';
const { channel } = useChannel()
channel.getChannelList()
</script>

<template>
  <ul class="catagtory">
    <li 
    :class="{ select : channel.active === item.id}"
    v-for="item in channel.list" :key="item.id"
    @click="channel.changeClick(item.id)"
    >{{item.name}}</li>
  </ul>
</template>

<style scoed lang="less">
</style>
