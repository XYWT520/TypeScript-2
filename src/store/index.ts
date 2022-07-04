import defineStore from './modules/channel'

export default function useChannel () {
  return {
    channel:defineStore()
  }
}