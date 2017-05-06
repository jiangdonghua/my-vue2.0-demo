<template>
  <div id="app">
  <mu-bottom-nav :value="bottomNav" shift @change="handleChange" v-if="vueSwipe">
   <mu-bottom-nav-item value="首页" title="首页" icon="home" to="/home"/>
    <mu-bottom-nav-item value="列表" title="列表" icon="list" to="/bottomNav"/>
    <mu-bottom-nav-item value="任务" title="任务" icon="playlist_add_check" to="/bottomNav"/>
    <mu-bottom-nav-item value="个人中心" title="个人中心" icon="assignment_ind" to="/bottomNav"/>
    <mu-bottom-nav-item value="更多" title="更多" icon="more_horiz" to="/"/>
  </mu-bottom-nav>
    <router-view  transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies',
      vueSwipe: true
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mu-bottom-nav{position:fixed;bottom:0;}
</style>
