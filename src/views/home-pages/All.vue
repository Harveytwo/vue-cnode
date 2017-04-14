<template>
  <div class="all">
  
    <div class="topicLists">
  
      <div v-for="item in topics"
           class="item">
        <a href=""
           class="author">
          <img :src="item.author.avatar_url">
        </a>
  
        <span class="replyCount">
                <span class="countReplies">{{ item.reply_count }}</span> /
        <span class="countVisits">{{ item.visit_count }}</span>
        </span>
  
        <a href=""
           class="latestReply">
          <img :src="item.author.avatar_url">
          <span class="replyTime">{{ item.last_reply_at }}</span>
        </a>
  
        <div class="titleWrap">
          <span v-if="item.top"
                class="putTop">置顶</span>
          <span v-if=" !item.top && item.good "
                class="putTop">精华</span>
          <span v-if="item.tab == 'ask' && !item.top && !item.good "
                class="nomalTab">问答</span>
          <span v-if=" item.tab == 'share' && !item.top && !item.good "
                class="nomalTab">分享</span>
          <span v-if="item.tab == 'job' && !item.top && !item.good "
                class="nomalTab">招聘</span>
          <router-link :to="{ path: '/topic/'+ item.id }"
                       class="topicTitle text-ellipsis">
            {{ item.title }}
          </router-link>
        </div>
  
      </div>
  
    </div>
  
  </div>
</template>

<script>

import store from '../../vuex/index.js'

import { homeAll } from '../../get-data/home-all.js'

export default {
  name: 'all',
  data() {
    return {
      msg: 'Welcome to Your all',
      // topics: [
      //   // {
      //   //   author: '../../../static/img/227713.png',
      //   //   countReplies: '11',
      //   //   countVisits: '222',
      //   //   latestReply: '../../../static/img/227713.png',
      //   //   replyTime: '3分钟',
      //   //   putTop: true,
      //   //   topicTitle: '这是什么电视的'
      //   // }
      // ]
    }
  },
  mounted: function () {
    let _this = this
    homeAll().then(response => response.json())
      .then(data => {
        // _this.topics = data.data;
        store.commit('getAll', data.data)
        // console.log(_this.topics)
      })
      .catch(e => console.log("Oops, error", e))
  },
  methods: {
    aa: function () {
      // console.log(this.$route)
    }
  },
  computed: {
    topics: function () {
      return store.state.all
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
<style type="text/css">
.topicLists {
  font-size: 14px;
}

.topicLists .item {
  padding: .1rem 0 .1rem .1rem;
}

.topicLists img {
  /*vertical-align: middle;*/
  border: 0;
  border-radius: 3px;
}

.topicLists .item:nth-child(1) {
  border-top: none;
}

.topicLists .item {
  padding-right: .1rem;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}

.author,
.replyCount {
  float: left;
}

.replyCount {
  width: .6rem;
  line-height: .28rem;
  display: inline-block;
  text-align: center;
  font-size: 14px;
}

.countReplies {
  color: #9e78c0
}

.countVisits {
  font-size: 10px;
  color: #b4b4b4;
}

.author img {
  width: .26rem;
  height: .26rem;
}

.latestReply {
  float: right;
}

.latestReply img {
  width: .18rem;
  height: .18rem;
  margin-right: .1rem;
}

.titleWrap {
  line-height: .26rem;
}

.putTop {
  background: #80bd01;
  color: #fff;
}

.putTop,
.nomalTab {
  padding: .02rem .04rem;
  font-size: 12px;
  border-radius: 3px;
}

.nomalTab {
  background-color: #e5e5e5;
  color: #999;
}

a.topicTitle {
  max-width: 60%;
  color: #333;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
}

a.topicTitle:hover {
  text-decoration: underline;
}

a.topicTitle:visit {
  color: #888;
}

.latestReply .replyTime {
  display: inline-block;
  text-align: center;
  color: #778087;
  font-size: 11px;
  min-width: .3rem;
  line-height: .26rem;
}
</style>