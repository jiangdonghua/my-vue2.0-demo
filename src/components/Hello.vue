<template>
  <div class="hello">
  <swipe class="my-swipe"  :show-indicators="true">
    <swipe-item  v-bind:class="'slide'+index" v-for="(item,index) in slider"><img :src="item" :alt="item" :key="item.id"></swipe-item>
  </swipe>
  <Bar></Bar>
  <mu-list></mu-list>
  <!-- <muCard></muCard> -->
  


  <mu-card v-for="task in tasks[0]" :style="{backgroundColor: task.status === '1' ? 'white': 'rgb(224, 224, 224)' }" :id="task.type">
  <mu-card-header :title="'Myron Avatar'+task.tid" :subTitle="task.title">
    <mu-avatar :src="task.thumbnail" slot="avatar"/>
  </mu-card-header>
  <mu-card-media :title="task.advertiser" :subTitle="task.advertisertion">
    <img src="/static/img/1.jpg" />
  </mu-card-media>
  <mu-card-title :title="'文艺'+task.person" :subTitle="dateFilter(task.created,2)"/>
  <mu-card-text>
    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
  </mu-card-text>
  <mu-card-actions>
  <mu-badge><mu-flat-button :label="task.status==='0'?'结束':'已领'" :style="{color: task.status === '1' ? 'green': 'gray' }" style="margin-left: 1rem;padding: .1rem;border: 1px solid #929292;"/></mu-badge>
     <mu-badge content="10" class="demo-icon-badge" circle secondary><mu-flat-button label="赞" icon="thumb_up"/></mu-badge>
    <mu-badge content="13" class="demo-icon-badge" circle secondary><mu-flat-button label="评论" icon="chat_bubble_outline"/> </mu-badge>
    <span :style="{color: task.status === '1' ? 'orange': 'gray',fontWeight:'bold'}">{{task.read_profit}} 积分</span>
  </mu-card-actions>
</mu-card>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>

</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe'
import  Bar from '@/components/Bar'
import muList from '@/components/mobileTearSheet'
// import muCard from '@/components/card'
import VuePullRefresh from 'vue-pull-refresh'

export default {
  name: 'Hello',
  components: {
    'mu-list': muList,
    Swipe,SwipeItem,Bar,VuePullRefresh
    //,muCard
  },
  data(){
      return{
        slider:null,
        tasks:[]
      }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData: function () {
         return this.$http.get('/static/data/tasks.json')
        .then(({data: {code, message, data}}) => {
          //console.log((data))
          this.$set(this.tasks,0, JSON.parse(JSON.stringify(data)))
          // this.tasks=data
          console.log((this.tasks[0]))
        })
      },
      dateFilter:function(time, type){
        let format = (value) => {
          return value >= 10 ? value : '0' + value
        }
        /**
         * 时间格式化
         */
          let date = new Date(time * 1000)
          let year = date.getFullYear()
          let month = date.getMonth() + 1
          let day = date.getDate()
          let hours = date.getHours()
          let minutes = date.getMinutes()
          let second = date.getSeconds()
          let result
          switch (type) {
            case 0: // 01-05
              result = `${format(month)}-${format(day)}`
              break
            case 1: // 11:12
              result = `${format(hours)}-${format(minutes)}`
              break
            case 2: // 2015-01-05
              result = `${year}-${format(month)}-${format(day)}`
              break
            case 3: // 2015-01-05 11:12
              result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`
              break
            case 4:// 2015-01-05 11:12:06
              result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`
              break
          }
          return result

      }
  },
  computed: {
    length () {
      return this.tasks.length
    }
  },
  mounted () {
      var _this = this;
      _this.$nextTick(function () {
        _this.$http.get('/static/data/banner.json').then(({data:{code,message,data}})=> {
          //console.log(data);
           let imgs = []
            for (let i = 0; i < data.length; i++) {
              imgs.push(data[i].content)
            }
          _this.slider=imgs;
          }, response=> {
            // error callback
          });
      //   _this.$http.get('/static/data/tasks.json')
      // .then(({data: {code, message, data}}) => {
      //   _this.$set(this.tasks,0, data)
      //   // this.tasks=DATA第二种方式
      //   console.log(this.tasks)
      // })
      })
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.my-swipe {
  height: 300px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
.my-swipe img{
  height:100%;
  width:100%
}
.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
.demo-icon-badge em{
    top:0;
  }
</style>

