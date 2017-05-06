<template>
<mu-paper>
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="排行榜" title="排行榜" icon="restore" to="/rank"/>
    <mu-bottom-nav-item value="我的任务" title="我的任务" icon="favorite"/>
    <mu-bottom-nav-item value="邀请有奖" title="邀请有奖" icon="location_on"/>
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

