<template>
<mu-card>
  <mu-card-header title="Myron Avatar" subTitle="啦啦啦">
    <mu-avatar src="/static/img/1.jpg" slot="avatar"/>
  </mu-card-header>
  <mu-card-media title="小卷毛" subTitle="好像一条狗">
    <img src="/static/img/1.jpg" />
  </mu-card-media>
  <mu-card-title title="文艺狗" subTitle="文艺诗集"/>
  <mu-card-text>
    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
  </mu-card-text>
  <mu-card-actions>
     <mu-badge content="10" class="demo-icon-badge" circle secondary><mu-flat-button label="赞" icon="thumb_up"/></mu-badge>
    <mu-badge content="13" class="demo-icon-badge" circle secondary><mu-flat-button label="评论" icon="chat_bubble_outline"/> </mu-badge>
  </mu-card-actions>
</mu-card>
</template>

<style scoped>
  .demo-icon-badge{
    width:25%;margin-right:5%;
  }
</style>

